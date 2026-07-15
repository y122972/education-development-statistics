/**
 * 全国教育事业发展统计公报 数据
 * 数据来源: 中华人民共和国教育部
 * http://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/
 *
 * 单位说明:
 *   在校生/在园幼儿: 万人
 *   学校数: 万所 (幼/小/初), 所 (高中/高校)
 *   专任教师: 万人
 *   毛入学率: %
 */

export interface YearData {
  year: number
  /** 学前教育在园幼儿 (万人) */
  preschoolEnrollment: number
  /** 小学在校生 (万人) */
  primaryEnrollment: number
  /** 初中在校生 (万人) */
  juniorHighEnrollment: number
  /** 普通高中在校生 (万人) */
  seniorHighEnrollment: number
  /** 中等职业学校在校生 (万人) */
  vocationalEnrollment: number
  /** 普通高等学校本专科在校生 (万人) */
  higherEnrollment: number
  /** 研究生在校生 (万人) */
  graduateEnrollment: number
  /** 幼儿园数 (万所) */
  kindergartenCount: number
  /** 小学数 (万所) */
  primarySchoolCount: number
  /** 初中数 (万所) */
  juniorHighSchoolCount: number
  /** 普通高中数 (万所) */
  seniorHighSchoolCount: number
  /** 普通高等学校数 (所) */
  higherEduInstitutionCount: number
  /** 幼儿园专任教师 (万人) */
  kindergartenTeachers: number
  /** 小学专任教师 (万人) */
  primaryTeachers: number
  /** 初中专任教师 (万人) */
  juniorHighTeachers: number
  /** 普通高中专任教师 (万人) */
  seniorHighTeachers: number
  /** 普通高等学校专任教师 (万人) */
  higherEduTeachers: number
  /** 学前三年毛入学率 (%) */
  preschoolGrossRate: number
  /** 九年义务教育巩固率 (%) */
  compulsoryRetentionRate: number
  /** 高中阶段毛入学率 (%) */
  seniorHighGrossRate: number
  /** 高等教育毛入学率 (%) */
  higherEduGrossRate: number
}

/**
 * 数据来自教育部历年全国教育事业发展统计公报
 * 覆盖 2011–2023 年度
 */
export const educationData: YearData[] = [
  {
    year: 2011,
    preschoolEnrollment: 3480.1,
    primaryEnrollment: 9116.6,
    juniorHighEnrollment: 5049.7,
    seniorHighEnrollment: 2453.7,
    vocationalEnrollment: 2197.3,
    higherEnrollment: 2308.5,
    graduateEnrollment: 164.6,
    kindergartenCount: 16.69,
    primarySchoolCount: 24.09,
    juniorHighSchoolCount: 5.49,
    seniorHighSchoolCount: 1.34,
    higherEduInstitutionCount: 2409,
    kindergartenTeachers: 95.1,
    primaryTeachers: 559.6,
    juniorHighTeachers: 359.0,
    seniorHighTeachers: 167.7,
    higherEduTeachers: 144.0,
    preschoolGrossRate: 62.3,
    compulsoryRetentionRate: 91.8,
    seniorHighGrossRate: 84.0,
    higherEduGrossRate: 26.9,
  },
  {
    year: 2012,
    preschoolEnrollment: 3685.8,
    primaryEnrollment: 9389.5,
    juniorHighEnrollment: 4705.6,
    seniorHighEnrollment: 2450.7,
    vocationalEnrollment: 2193.1,
    higherEnrollment: 2391.3,
    graduateEnrollment: 171.8,
    kindergartenCount: 18.08,
    primarySchoolCount: 22.84,
    juniorHighSchoolCount: 5.32,
    seniorHighSchoolCount: 1.33,
    higherEduInstitutionCount: 2442,
    kindergartenTeachers: 107.8,
    primaryTeachers: 563.1,
    juniorHighTeachers: 349.7,
    seniorHighTeachers: 167.4,
    higherEduTeachers: 149.6,
    preschoolGrossRate: 64.5,
    compulsoryRetentionRate: 92.1,
    seniorHighGrossRate: 85.0,
    higherEduGrossRate: 30.0,
  },
  {
    year: 2013,
    preschoolEnrollment: 3894.9,
    primaryEnrollment: 9360.5,
    juniorHighEnrollment: 4384.3,
    seniorHighEnrollment: 2471.7,
    vocationalEnrollment: 2199.5,
    higherEnrollment: 2468.1,
    graduateEnrollment: 179.4,
    kindergartenCount: 19.86,
    primarySchoolCount: 21.35,
    juniorHighSchoolCount: 5.21,
    seniorHighSchoolCount: 1.35,
    higherEduInstitutionCount: 2491,
    kindergartenTeachers: 118.7,
    primaryTeachers: 558.3,
    juniorHighTeachers: 341.8,
    seniorHighTeachers: 169.3,
    higherEduTeachers: 153.6,
    preschoolGrossRate: 67.5,
    compulsoryRetentionRate: 92.3,
    seniorHighGrossRate: 86.0,
    higherEduGrossRate: 34.5,
  },
  {
    year: 2014,
    preschoolEnrollment: 4050.7,
    primaryEnrollment: 9389.8,
    juniorHighEnrollment: 4319.3,
    seniorHighEnrollment: 2428.2,
    vocationalEnrollment: 2212.4,
    higherEnrollment: 2547.7,
    graduateEnrollment: 184.8,
    kindergartenCount: 20.97,
    primarySchoolCount: 20.14,
    juniorHighSchoolCount: 5.21,
    seniorHighSchoolCount: 1.35,
    higherEduInstitutionCount: 2529,
    kindergartenTeachers: 131.2,
    primaryTeachers: 558.0,
    juniorHighTeachers: 338.4,
    seniorHighTeachers: 168.5,
    higherEduTeachers: 157.3,
    preschoolGrossRate: 70.5,
    compulsoryRetentionRate: 92.6,
    seniorHighGrossRate: 86.5,
    higherEduGrossRate: 37.5,
  },
  {
    year: 2015,
    preschoolEnrollment: 4264.8,
    primaryEnrollment: 9461.9,
    juniorHighEnrollment: 4359.5,
    seniorHighEnrollment: 2377.3,
    vocationalEnrollment: 2169.6,
    higherEnrollment: 2625.3,
    graduateEnrollment: 191.1,
    kindergartenCount: 22.37,
    primarySchoolCount: 19.52,
    juniorHighSchoolCount: 5.21,
    seniorHighSchoolCount: 1.37,
    higherEduInstitutionCount: 2560,
    kindergartenTeachers: 145.3,
    primaryTeachers: 564.0,
    juniorHighTeachers: 341.1,
    seniorHighTeachers: 166.3,
    higherEduTeachers: 160.0,
    preschoolGrossRate: 75.0,
    compulsoryRetentionRate: 93.0,
    seniorHighGrossRate: 87.0,
    higherEduGrossRate: 40.0,
  },
  {
    year: 2016,
    preschoolEnrollment: 4413.9,
    primaryEnrollment: 9913.0,
    juniorHighEnrollment: 4329.4,
    seniorHighEnrollment: 2366.7,
    vocationalEnrollment: 2097.0,
    higherEnrollment: 2695.8,
    graduateEnrollment: 198.1,
    kindergartenCount: 23.98,
    primarySchoolCount: 18.97,
    juniorHighSchoolCount: 5.21,
    seniorHighSchoolCount: 1.38,
    higherEduInstitutionCount: 2596,
    kindergartenTeachers: 156.1,
    primaryTeachers: 594.7,
    juniorHighTeachers: 341.9,
    seniorHighTeachers: 165.9,
    higherEduTeachers: 163.3,
    preschoolGrossRate: 77.4,
    compulsoryRetentionRate: 93.4,
    seniorHighGrossRate: 87.5,
    higherEduGrossRate: 42.7,
  },
  {
    year: 2017,
    preschoolEnrollment: 4600.1,
    primaryEnrollment: 10093.7,
    juniorHighEnrollment: 4415.1,
    seniorHighEnrollment: 2374.0,
    vocationalEnrollment: 2069.5,
    higherEnrollment: 2753.6,
    graduateEnrollment: 203.0,
    kindergartenCount: 25.50,
    primarySchoolCount: 18.65,
    juniorHighSchoolCount: 5.24,
    seniorHighSchoolCount: 1.39,
    higherEduInstitutionCount: 2631,
    kindergartenTeachers: 165.9,
    primaryTeachers: 607.5,
    juniorHighTeachers: 347.2,
    seniorHighTeachers: 166.6,
    higherEduTeachers: 167.3,
    preschoolGrossRate: 79.6,
    compulsoryRetentionRate: 93.8,
    seniorHighGrossRate: 88.3,
    higherEduGrossRate: 45.7,
  },
  {
    year: 2018,
    preschoolEnrollment: 4656.4,
    primaryEnrollment: 10339.1,
    juniorHighEnrollment: 4652.0,
    seniorHighEnrollment: 2380.2,
    vocationalEnrollment: 2084.7,
    higherEnrollment: 2831.0,
    graduateEnrollment: 213.0,
    kindergartenCount: 26.67,
    primarySchoolCount: 18.35,
    juniorHighSchoolCount: 5.28,
    seniorHighSchoolCount: 1.41,
    higherEduInstitutionCount: 2663,
    kindergartenTeachers: 175.8,
    primaryTeachers: 620.6,
    juniorHighTeachers: 358.2,
    seniorHighTeachers: 167.2,
    higherEduTeachers: 172.3,
    preschoolGrossRate: 81.7,
    compulsoryRetentionRate: 94.2,
    seniorHighGrossRate: 88.8,
    higherEduGrossRate: 48.1,
  },
  {
    year: 2019,
    preschoolEnrollment: 4713.9,
    primaryEnrollment: 10561.0,
    juniorHighEnrollment: 4927.9,
    seniorHighEnrollment: 2423.0,
    vocationalEnrollment: 2043.2,
    higherEnrollment: 3031.8,
    graduateEnrollment: 231.8,
    kindergartenCount: 28.12,
    primarySchoolCount: 16.89,
    juniorHighSchoolCount: 5.29,
    seniorHighSchoolCount: 1.44,
    higherEduInstitutionCount: 2688,
    kindergartenTeachers: 184.0,
    primaryTeachers: 629.3,
    juniorHighTeachers: 375.0,
    seniorHighTeachers: 170.8,
    higherEduTeachers: 177.4,
    preschoolGrossRate: 83.4,
    compulsoryRetentionRate: 94.8,
    seniorHighGrossRate: 89.5,
    higherEduGrossRate: 51.6,
  },
  {
    year: 2020,
    preschoolEnrollment: 4818.3,
    primaryEnrollment: 10725.2,
    juniorHighEnrollment: 5240.0,
    seniorHighEnrollment: 2599.8,
    vocationalEnrollment: 2087.8,
    higherEnrollment: 3285.3,
    graduateEnrollment: 252.4,
    kindergartenCount: 29.17,
    primarySchoolCount: 15.97,
    juniorHighSchoolCount: 5.29,
    seniorHighSchoolCount: 1.46,
    higherEduInstitutionCount: 2738,
    kindergartenTeachers: 193.1,
    primaryTeachers: 639.5,
    juniorHighTeachers: 393.2,
    seniorHighTeachers: 178.3,
    higherEduTeachers: 183.0,
    preschoolGrossRate: 85.2,
    compulsoryRetentionRate: 95.2,
    seniorHighGrossRate: 91.2,
    higherEduGrossRate: 54.4,
  },
  {
    year: 2021,
    preschoolEnrollment: 4805.2,
    primaryEnrollment: 10799.2,
    juniorHighEnrollment: 5474.7,
    seniorHighEnrollment: 2910.1,
    vocationalEnrollment: 2217.5,
    higherEnrollment: 3496.0,
    graduateEnrollment: 302.7,
    kindergartenCount: 29.48,
    primarySchoolCount: 15.35,
    juniorHighSchoolCount: 5.29,
    seniorHighSchoolCount: 1.50,
    higherEduInstitutionCount: 3012,
    kindergartenTeachers: 197.2,
    primaryTeachers: 649.7,
    juniorHighTeachers: 410.3,
    seniorHighTeachers: 196.4,
    higherEduTeachers: 196.2,
    preschoolGrossRate: 88.1,
    compulsoryRetentionRate: 95.4,
    seniorHighGrossRate: 91.4,
    higherEduGrossRate: 57.8,
  },
  {
    year: 2022,
    preschoolEnrollment: 4627.0,
    primaryEnrollment: 10847.3,
    juniorHighEnrollment: 5637.9,
    seniorHighEnrollment: 2785.8,
    vocationalEnrollment: 2232.9,
    higherEnrollment: 3859.7,
    graduateEnrollment: 365.4,
    kindergartenCount: 28.92,
    primarySchoolCount: 14.91,
    juniorHighSchoolCount: 5.29,
    seniorHighSchoolCount: 1.46,
    higherEduInstitutionCount: 3013,
    kindergartenTeachers: 196.5,
    primaryTeachers: 657.0,
    juniorHighTeachers: 421.3,
    seniorHighTeachers: 192.0,
    higherEduTeachers: 204.0,
    preschoolGrossRate: 89.7,
    compulsoryRetentionRate: 95.5,
    seniorHighGrossRate: 91.6,
    higherEduGrossRate: 59.6,
  },
  {
    year: 2023,
    preschoolEnrollment: 4092.7,
    primaryEnrollment: 10748.5,
    juniorHighEnrollment: 5609.1,
    seniorHighEnrollment: 3152.2,
    vocationalEnrollment: 2195.3,
    higherEnrollment: 4310.9,
    graduateEnrollment: 490.9,
    kindergartenCount: 27.44,
    primarySchoolCount: 14.35,
    juniorHighSchoolCount: 5.17,
    seniorHighSchoolCount: 1.50,
    higherEduInstitutionCount: 3074,
    kindergartenTeachers: 185.3,
    primaryTeachers: 655.1,
    juniorHighTeachers: 424.4,
    seniorHighTeachers: 208.9,
    higherEduTeachers: 215.4,
    preschoolGrossRate: 91.1,
    compulsoryRetentionRate: 95.7,
    seniorHighGrossRate: 92.8,
    higherEduGrossRate: 60.2,
  },
]

export type MetricKey = keyof Omit<YearData, 'year'>

export interface MetricMeta {
  key: MetricKey
  label: string
  unit: string
  color: string
}

export const enrollmentMetrics: MetricMeta[] = [
  { key: 'preschoolEnrollment', label: '学前教育（在园幼儿）', unit: '万人', color: '#f97316' },
  { key: 'primaryEnrollment', label: '小学（在校生）', unit: '万人', color: '#22c55e' },
  { key: 'juniorHighEnrollment', label: '初中（在校生）', unit: '万人', color: '#3b82f6' },
  { key: 'seniorHighEnrollment', label: '普通高中（在校生）', unit: '万人', color: '#a855f7' },
  { key: 'vocationalEnrollment', label: '中等职业学校（在校生）', unit: '万人', color: '#ec4899' },
  { key: 'higherEnrollment', label: '普通高校本专科（在校生）', unit: '万人', color: '#ef4444' },
  { key: 'graduateEnrollment', label: '研究生（在校生）', unit: '万人', color: '#14b8a6' },
]

export const schoolCountMetrics: MetricMeta[] = [
  { key: 'kindergartenCount', label: '幼儿园', unit: '万所', color: '#f97316' },
  { key: 'primarySchoolCount', label: '小学', unit: '万所', color: '#22c55e' },
  { key: 'juniorHighSchoolCount', label: '初中', unit: '万所', color: '#3b82f6' },
  { key: 'seniorHighSchoolCount', label: '普通高中', unit: '万所', color: '#a855f7' },
]

export const teacherMetrics: MetricMeta[] = [
  { key: 'kindergartenTeachers', label: '幼儿园专任教师', unit: '万人', color: '#f97316' },
  { key: 'primaryTeachers', label: '小学专任教师', unit: '万人', color: '#22c55e' },
  { key: 'juniorHighTeachers', label: '初中专任教师', unit: '万人', color: '#3b82f6' },
  { key: 'seniorHighTeachers', label: '普通高中专任教师', unit: '万人', color: '#a855f7' },
  { key: 'higherEduTeachers', label: '高校专任教师', unit: '万人', color: '#ef4444' },
]

export const grossRateMetrics: MetricMeta[] = [
  { key: 'preschoolGrossRate', label: '学前三年毛入学率', unit: '%', color: '#f97316' },
  { key: 'compulsoryRetentionRate', label: '九年义务教育巩固率', unit: '%', color: '#22c55e' },
  { key: 'seniorHighGrossRate', label: '高中阶段毛入学率', unit: '%', color: '#3b82f6' },
  { key: 'higherEduGrossRate', label: '高等教育毛入学率', unit: '%', color: '#a855f7' },
]
