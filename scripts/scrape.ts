/**
 * 教育部全国教育事业发展统计公报 抓取脚本
 * 用法: node --loader ts-node/esm scripts/scrape.ts
 * 或:   npx ts-node --esm scripts/scrape.ts
 *
 * 功能:
 *   1. 从 http://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/ 获取历年公报列表
 *   2. 依次抓取每份公报的详情页，提取关键统计数字
 *   3. 将结果输出为 JSON 文件，可替换 src/data/educationData.ts 中的硬编码数据
 */

import axios from 'axios'
import * as cheerio from 'cheerio'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const BASE_URL = 'http://www.moe.gov.cn'
const INDEX_URL = `${BASE_URL}/jyb_sjzl/sjzl_fztjgb/`

/** 延迟函数，避免请求过快 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

interface BulletinLink {
  year: number
  title: string
  url: string
}

/**
 * 从索引页抓取历年公报链接列表
 */
async function fetchBulletinList(): Promise<BulletinLink[]> {
  console.log(`正在抓取公报列表: ${INDEX_URL}`)
  const response = await axios.get(INDEX_URL, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
    timeout: 15000,
  })

  const $ = cheerio.load(response.data)
  const bulletins: BulletinLink[] = []

  // 教育部网站公报列表通常以 <a> 链接呈现，标题包含年份
  $('a').each((_, el) => {
    const href = $(el).attr('href') || ''
    const text = $(el).text().trim()

    // 匹配包含"教育事业发展统计公报"的链接
    if (text.includes('统计公报') || text.includes('教育事业发展')) {
      const yearMatch = text.match(/(\d{4})/)
      if (yearMatch) {
        const year = parseInt(yearMatch[1], 10)
        const url = href.startsWith('http') ? href : `${BASE_URL}${href}`
        bulletins.push({ year, title: text, url })
      }
    }
  })

  // 按年份升序排列
  bulletins.sort((a, b) => a.year - b.year)
  console.log(`共找到 ${bulletins.length} 份公报`)
  return bulletins
}

/**
 * 从数字字符串中提取数值
 * 处理常见格式: "4713.9万人", "2.8万所", "3031所", "51.6%"
 */
function extractNumber(text: string): number | null {
  const cleaned = text.replace(/,/g, '').trim()
  const match = cleaned.match(/[\d.]+/)
  if (!match) return null
  return parseFloat(match[0])
}

/**
 * 在公报页面正文中搜索特定关键词附近的数字
 */
function findValueInText(text: string, keywords: string[]): number | null {
  for (const kw of keywords) {
    const idx = text.indexOf(kw)
    if (idx === -1) continue
    // 取关键词后 50 字符范围内的数字
    const snippet = text.slice(idx, idx + 80)
    const num = extractNumber(snippet)
    if (num !== null) return num
  }
  return null
}

/**
 * 抓取单份公报页面，提取关键数据
 */
async function scrapeBulletin(bulletin: BulletinLink): Promise<Record<string, number | null>> {
  console.log(`  正在抓取 ${bulletin.year} 年公报: ${bulletin.url}`)
  try {
    const response = await axios.get(bulletin.url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Referer: INDEX_URL,
      },
      timeout: 15000,
    })

    const $ = cheerio.load(response.data)
    const text = $('body').text().replace(/\s+/g, ' ')

    const data: Record<string, number | null> = {
      year: bulletin.year,
      // 学前教育在园幼儿
      preschoolEnrollment: findValueInText(text, ['在园幼儿', '幼儿在园']),
      // 小学在校生
      primaryEnrollment: findValueInText(text, ['小学在校生', '小学在校学生']),
      // 初中在校生
      juniorHighEnrollment: findValueInText(text, ['初中在校生', '初中阶段在校生']),
      // 普通高中在校生
      seniorHighEnrollment: findValueInText(text, ['普通高中在校生', '高中阶段在校生']),
      // 中职在校生
      vocationalEnrollment: findValueInText(text, ['中等职业学校在校生', '中职在校生']),
      // 高校本专科在校生
      higherEnrollment: findValueInText(text, ['本专科在校生', '普通高等学校在校学生']),
      // 研究生在校生
      graduateEnrollment: findValueInText(text, ['研究生在校生', '研究生在学']),
      // 幼儿园数
      kindergartenCount: findValueInText(text, ['幼儿园', '幼儿园数']),
      // 普通高校数
      higherEduInstitutionCount: findValueInText(text, ['普通高等学校', '高等学校']),
      // 高等教育毛入学率
      higherEduGrossRate: findValueInText(text, ['高等教育毛入学率']),
    }

    return data
  } catch (err) {
    console.error(`    抓取失败: ${(err as Error).message}`)
    return { year: bulletin.year }
  }
}

async function main() {
  try {
    const bulletins = await fetchBulletinList()

    if (bulletins.length === 0) {
      console.warn('未找到任何公报链接，请检查页面结构是否发生变化')
      process.exit(1)
    }

    const results = []
    for (const bulletin of bulletins) {
      const data = await scrapeBulletin(bulletin)
      results.push(data)
      await sleep(1000) // 礼貌性延迟，避免对服务器造成压力
    }

    const outputPath = resolve(__dirname, '../src/data/scraped.json')
    writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8')
    console.log(`\n✅ 数据已保存至: ${outputPath}`)
    console.log('请将数据整理后更新到 src/data/educationData.ts')
  } catch (err) {
    console.error('抓取过程出错:', err)
    process.exit(1)
  }
}

main()
