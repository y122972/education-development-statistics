import { useEffect, useMemo, useState } from 'react'
import {
  bulletinAssetUrl,
  bulletinIndex,
  type BulletinDocument,
  type BulletinStatement,
} from '../data/bulletins'

type ReaderTab = 'data' | 'original'

function formatPublishedDate(date: string) {
  const [year, month, day] = date.split('-')
  return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`
}

function statementMatches(statement: BulletinStatement, query: string) {
  const normalizedQuery = query.trim().toLocaleLowerCase('zh-CN')
  if (!normalizedQuery) return true

  return [
    statement.section,
    statement.text,
    ...statement.values.flatMap((value) => [value.label, value.raw, value.unit]),
  ].some((text) => text.toLocaleLowerCase('zh-CN').includes(normalizedQuery))
}

function OriginalDocument({ content }: { content: string }) {
  const lines = useMemo(() => {
    const allLines = content.replace(/\r\n/g, '\n').split('\n')
    if (allLines[0]?.trim() !== '---') return allLines
    const frontmatterEnd = allLines.findIndex(
      (line, index) => index > 0 && line.trim() === '---',
    )
    return frontmatterEnd === -1 ? allLines : allLines.slice(frontmatterEnd + 1)
  }, [content])

  return (
    <article className="original-document" lang="zh-CN">
      {lines.map((line, index) => {
        const trimmed = line.trim()
        const imageMatch = trimmed.match(/^!\[([^\]]+)]\((https:\/\/[^)]+)\)$/)
        if (!trimmed) return <span className="document-spacer" key={index} />
        if (imageMatch) {
          return (
            <figure key={index}>
              <img src={imageMatch[2]} alt={imageMatch[1]} loading="lazy" />
              <figcaption>{imageMatch[1]}</figcaption>
            </figure>
          )
        }
        if (trimmed.startsWith('### ')) {
          return <h4 key={index}>{trimmed.slice(4)}</h4>
        }
        if (trimmed.startsWith('## ')) {
          return <h3 key={index}>{trimmed.slice(3)}</h3>
        }
        if (trimmed.startsWith('# ')) {
          return <h2 key={index}>{trimmed.slice(2)}</h2>
        }
        if (trimmed.startsWith('> ')) {
          return <blockquote key={index}>{trimmed.slice(2)}</blockquote>
        }
        if (trimmed.startsWith('|')) {
          return (
            <div className="document-table-row" key={index}>
              {trimmed}
            </div>
          )
        }
        return <p key={index}>{trimmed}</p>
      })}
    </article>
  )
}

export default function BulletinArchive() {
  const [selectedYear, setSelectedYear] = useState(bulletinIndex[0].year)
  const [bulletin, setBulletin] = useState<BulletinDocument | null>(null)
  const [original, setOriginal] = useState('')
  const [readerTab, setReaderTab] = useState<ReaderTab>('data')
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadBulletin() {
      setIsLoading(true)
      setError('')
      setBulletin(null)
      setOriginal('')
      setQuery('')

      try {
        const [dataResponse, originalResponse] = await Promise.all([
          fetch(bulletinAssetUrl(selectedYear, 'json'), {
            signal: controller.signal,
          }),
          fetch(bulletinAssetUrl(selectedYear, 'md'), {
            signal: controller.signal,
          }),
        ])

        if (!dataResponse.ok || !originalResponse.ok) {
          throw new Error('公报档案尚未完整生成')
        }

        const [data, markdown] = await Promise.all([
          dataResponse.json() as Promise<BulletinDocument>,
          originalResponse.text(),
        ])
        setBulletin(data)
        setOriginal(markdown)
      } catch (loadError) {
        if (loadError instanceof DOMException && loadError.name === 'AbortError') return
        setError(loadError instanceof Error ? loadError.message : '公报加载失败')
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    void loadBulletin()
    return () => controller.abort()
  }, [selectedYear])

  const filteredStatements = useMemo(
    () => bulletin?.statements.filter((statement) => statementMatches(statement, query)) ?? [],
    [bulletin, query],
  )

  const valueCount = useMemo(
    () => bulletin?.statements.reduce((total, statement) => total + statement.values.length, 0) ?? 0,
    [bulletin],
  )

  return (
    <section className="archive-layout" aria-labelledby="archive-title">
      <aside className="year-index" aria-label="公报年份">
        <div className="year-index-heading">
          <p className="section-kicker">年度索引</p>
          <span>{bulletinIndex.length} 份公报</span>
        </div>
        <div className="year-list">
          {bulletinIndex.map((item) => (
            <button
              type="button"
              key={item.year}
              className={`year-button${selectedYear === item.year ? ' active' : ''}`}
              aria-current={selectedYear === item.year ? 'page' : undefined}
              onClick={() => setSelectedYear(item.year)}
            >
              <strong>{item.year}</strong>
              <span>{item.publishedDate.slice(0, 4)} 发布</span>
            </button>
          ))}
        </div>
      </aside>

      <div className="archive-reader">
        <header className="reader-header">
          <div>
            <p className="section-kicker">原始资料 · {selectedYear}</p>
            <h2 id="archive-title">
              {bulletin?.title ?? `${selectedYear} 年全国教育事业发展统计公报`}
            </h2>
            {bulletin && (
              <p className="reader-meta">
                教育部发布于 {formatPublishedDate(bulletin.publishedDate)} · 提取到{' '}
                {bulletin.statements.length} 条数字陈述、{valueCount} 个数值
              </p>
            )}
          </div>
          <a
            className="source-link"
            href={bulletin?.sourceUrl ?? bulletinIndex.find((item) => item.year === selectedYear)?.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            查看教育部原页 <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="reader-toolbar">
          <div className="reader-tabs" role="tablist" aria-label="公报内容">
            <button
              type="button"
              role="tab"
              aria-selected={readerTab === 'data'}
              className={readerTab === 'data' ? 'active' : ''}
              onClick={() => setReaderTab('data')}
            >
              数据摘录
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={readerTab === 'original'}
              className={readerTab === 'original' ? 'active' : ''}
              onClick={() => setReaderTab('original')}
            >
              公报原文
            </button>
          </div>
          {readerTab === 'data' && (
            <label className="statement-search">
              <span className="sr-only">搜索公报指标</span>
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索学校、在校生、入学率…"
              />
            </label>
          )}
        </div>

        {isLoading && (
          <div className="reader-state" role="status">
            <span className="loading-mark" aria-hidden="true" />
            正在整理 {selectedYear} 年公报…
          </div>
        )}

        {!isLoading && error && (
          <div className="reader-state reader-error" role="alert">
            <strong>暂时无法读取这份公报</strong>
            <span>{error}</span>
          </div>
        )}

        {!isLoading && !error && readerTab === 'data' && bulletin && (
          <div className="statement-list">
            <p className="result-count">
              {query ? `找到 ${filteredStatements.length} 条相关陈述` : '按公报原有章节顺序排列'}
            </p>
            {filteredStatements.map((statement, index) => (
              <article className="statement-card" key={`${statement.section}-${index}`}>
                <p className="statement-section">{statement.section || '公报正文'}</p>
                <p className="statement-text">{statement.text}</p>
                <div className="statement-values">
                  {statement.values.map((value, valueIndex) => (
                    <div className="statement-value" key={`${value.label}-${valueIndex}`}>
                      <span>{value.label}</span>
                      <strong>{value.raw}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
            {filteredStatements.length === 0 && (
              <div className="reader-state">没有找到与“{query}”相关的数字陈述。</div>
            )}
          </div>
        )}

        {!isLoading && !error && readerTab === 'original' && original && (
          <OriginalDocument content={original} />
        )}
      </div>
    </section>
  )
}
