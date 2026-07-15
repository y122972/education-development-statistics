/**
 * 用于跨年趋势图的标准化数据。
 *
 * 数据逐年人工核对自 public/data/bulletins/<year>.json 中保留的教育部公报原句。
 * 人数统一换算为“万人”，基础教育学校数统一换算为“万所”。若某年公报未单列
 * 同口径指标，则保留为 null，不用推算值补齐。
 */

type MetricValue = number | null

export interface YearData {
  year: number
  /** 学前教育在园幼儿（万人） */
  preschoolEnrollment: MetricValue
  /** 小学阶段在校生（万人） */
  primaryEnrollment: MetricValue
  /** 初中阶段在校生（万人） */
  juniorHighEnrollment: MetricValue
  /** 普通高中在校生（万人） */
  seniorHighEnrollment: MetricValue
  /** 中等职业教育在校生（万人） */
  vocationalEnrollment: MetricValue
  /** 普通、职业本专科在校生（万人） */
  higherEnrollment: MetricValue
  /** 在学研究生（万人） */
  graduateEnrollment: MetricValue
  /** 幼儿园数（万所） */
  kindergartenCount: MetricValue
  /** 普通小学数（万所） */
  primarySchoolCount: MetricValue
  /** 初中数（万所） */
  juniorHighSchoolCount: MetricValue
  /** 普通高中数（万所） */
  seniorHighSchoolCount: MetricValue
  /** 普通、职业高等学校数，不含成人高校（所） */
  higherEduInstitutionCount: MetricValue
  /** 学前教育专任教师（万人） */
  kindergartenTeachers: MetricValue
  /** 小学阶段教育专任教师（万人） */
  primaryTeachers: MetricValue
  /** 初中阶段教育专任教师（万人） */
  juniorHighTeachers: MetricValue
  /** 普通高中教育专任教师（万人） */
  seniorHighTeachers: MetricValue
  /** 普通、职业高等学校专任教师，不含成人高校（万人） */
  higherEduTeachers: MetricValue
  /** 学前教育毛入园率（%） */
  preschoolGrossRate: MetricValue
  /** 九年义务教育巩固率（%） */
  compulsoryRetentionRate: MetricValue
  /** 高中阶段毛入学率（%） */
  seniorHighGrossRate: MetricValue
  /** 高等教育毛入学率（%） */
  higherEduGrossRate: MetricValue
}

export const educationData: YearData[] = [
  {
    year: 2011,
    preschoolEnrollment: 3424.45,
    primaryEnrollment: 9926.37,
    juniorHighEnrollment: 5066.8,
    seniorHighEnrollment: 2454.82,
    vocationalEnrollment: 2205.33,
    higherEnrollment: 2308.51,
    graduateEnrollment: 164.58,
    kindergartenCount: 16.68,
    primarySchoolCount: 24.12,
    juniorHighSchoolCount: 5.41,
    seniorHighSchoolCount: 1.3688,
    higherEduInstitutionCount: 2409,
    kindergartenTeachers: null,
    primaryTeachers: 560.49,
    juniorHighTeachers: 352.45,
    seniorHighTeachers: 155.68,
    higherEduTeachers: 139.27,
    preschoolGrossRate: 62.3,
    compulsoryRetentionRate: null,
    seniorHighGrossRate: 84,
    higherEduGrossRate: 26.9,
  },
  {
    year: 2012,
    preschoolEnrollment: 3685.76,
    primaryEnrollment: 9695.9,
    juniorHighEnrollment: 4763.06,
    seniorHighEnrollment: 2467.17,
    vocationalEnrollment: 2113.69,
    higherEnrollment: 2391.32,
    graduateEnrollment: 171.98,
    kindergartenCount: 18.13,
    primarySchoolCount: 22.86,
    juniorHighSchoolCount: 5.32,
    seniorHighSchoolCount: 1.3509,
    higherEduInstitutionCount: 2442,
    kindergartenTeachers: null,
    primaryTeachers: 558.55,
    juniorHighTeachers: 350.44,
    seniorHighTeachers: 159.5,
    higherEduTeachers: 144.03,
    preschoolGrossRate: 64.5,
    compulsoryRetentionRate: 91.8,
    seniorHighGrossRate: 85,
    higherEduGrossRate: 30,
  },
  {
    year: 2013,
    preschoolEnrollment: 3894.69,
    primaryEnrollment: 9360.55,
    juniorHighEnrollment: 4440.12,
    seniorHighEnrollment: 2435.88,
    vocationalEnrollment: 1922.97,
    higherEnrollment: 2468.07,
    graduateEnrollment: 179.4,
    kindergartenCount: 19.86,
    primarySchoolCount: 21.35,
    juniorHighSchoolCount: 5.28,
    seniorHighSchoolCount: 1.34,
    higherEduInstitutionCount: 2491,
    kindergartenTeachers: null,
    primaryTeachers: 558.46,
    juniorHighTeachers: 348.1,
    seniorHighTeachers: 162.9,
    higherEduTeachers: 149.69,
    preschoolGrossRate: 67.5,
    compulsoryRetentionRate: 92.3,
    seniorHighGrossRate: 86,
    higherEduGrossRate: 34.5,
  },
  {
    year: 2014,
    preschoolEnrollment: 4050.71,
    primaryEnrollment: 9451.07,
    juniorHighEnrollment: 4384.63,
    seniorHighEnrollment: 2400.47,
    vocationalEnrollment: 1755.28,
    higherEnrollment: 2547.7,
    graduateEnrollment: 184.77,
    kindergartenCount: 20.99,
    primarySchoolCount: 20.14,
    juniorHighSchoolCount: 5.26,
    seniorHighSchoolCount: 1.33,
    higherEduInstitutionCount: 2529,
    kindergartenTeachers: null,
    primaryTeachers: 563.39,
    juniorHighTeachers: 348.84,
    seniorHighTeachers: 166.27,
    higherEduTeachers: 153.45,
    preschoolGrossRate: 70.5,
    compulsoryRetentionRate: 92.6,
    seniorHighGrossRate: 86.5,
    higherEduGrossRate: 37.5,
  },
  {
    year: 2015,
    preschoolEnrollment: 4264.83,
    primaryEnrollment: 9692.18,
    juniorHighEnrollment: 4311.95,
    seniorHighEnrollment: 2374.4,
    vocationalEnrollment: 1656.7,
    higherEnrollment: 2625.3,
    graduateEnrollment: 191.14,
    kindergartenCount: 22.37,
    primarySchoolCount: 19.05,
    juniorHighSchoolCount: 5.24,
    seniorHighSchoolCount: 1.32,
    higherEduInstitutionCount: 2560,
    kindergartenTeachers: null,
    primaryTeachers: 568.51,
    juniorHighTeachers: 347.56,
    seniorHighTeachers: 169.54,
    higherEduTeachers: 157.26,
    preschoolGrossRate: 75,
    compulsoryRetentionRate: 93,
    seniorHighGrossRate: 87,
    higherEduGrossRate: 40,
  },
  {
    year: 2016,
    preschoolEnrollment: 4413.86,
    primaryEnrollment: 9913.01,
    juniorHighEnrollment: 4329.37,
    seniorHighEnrollment: 2366.65,
    vocationalEnrollment: 1599.01,
    higherEnrollment: 2695.84,
    graduateEnrollment: 198.11,
    kindergartenCount: 23.98,
    primarySchoolCount: 17.76,
    juniorHighSchoolCount: 5.21,
    seniorHighSchoolCount: 1.34,
    higherEduInstitutionCount: 2596,
    kindergartenTeachers: null,
    primaryTeachers: 578.91,
    juniorHighTeachers: 348.78,
    seniorHighTeachers: 173.35,
    higherEduTeachers: 160.2,
    preschoolGrossRate: 77.4,
    compulsoryRetentionRate: 93.4,
    seniorHighGrossRate: 87.5,
    higherEduGrossRate: 42.7,
  },
  {
    year: 2017,
    preschoolEnrollment: 4600.14,
    primaryEnrollment: 10093.7,
    juniorHighEnrollment: 4442.06,
    seniorHighEnrollment: 2374.55,
    vocationalEnrollment: 1592.5,
    higherEnrollment: 2753.59,
    graduateEnrollment: 263.96,
    kindergartenCount: 25.5,
    primarySchoolCount: 16.7009,
    juniorHighSchoolCount: 5.1894,
    seniorHighSchoolCount: 1.3555,
    higherEduInstitutionCount: 2631,
    kindergartenTeachers: 243.21,
    primaryTeachers: 594.49,
    juniorHighTeachers: 354.87,
    seniorHighTeachers: 177.4,
    higherEduTeachers: 163.32,
    preschoolGrossRate: 79.6,
    compulsoryRetentionRate: 93.8,
    seniorHighGrossRate: 88.3,
    higherEduGrossRate: 45.7,
  },
  {
    year: 2018,
    preschoolEnrollment: 4656.42,
    primaryEnrollment: 10339.25,
    juniorHighEnrollment: 4652.59,
    seniorHighEnrollment: 2375.37,
    vocationalEnrollment: 1555.26,
    higherEnrollment: 2831.03,
    graduateEnrollment: 273.13,
    kindergartenCount: 26.67,
    primarySchoolCount: 16.1811,
    juniorHighSchoolCount: 5.1982,
    seniorHighSchoolCount: 1.3737,
    higherEduInstitutionCount: 2663,
    kindergartenTeachers: 258.14,
    primaryTeachers: 609.19,
    juniorHighTeachers: 363.9,
    seniorHighTeachers: 181.26,
    higherEduTeachers: 167.28,
    preschoolGrossRate: 81.7,
    compulsoryRetentionRate: 94.2,
    seniorHighGrossRate: 88.8,
    higherEduGrossRate: 48.1,
  },
  {
    year: 2019,
    preschoolEnrollment: 4713.88,
    primaryEnrollment: 10561.24,
    juniorHighEnrollment: 4827.14,
    seniorHighEnrollment: 2414.31,
    vocationalEnrollment: 1576.47,
    higherEnrollment: 3031.53,
    graduateEnrollment: 286.37,
    kindergartenCount: 28.12,
    primarySchoolCount: 16.0148,
    juniorHighSchoolCount: 5.2415,
    seniorHighSchoolCount: 1.3964,
    higherEduInstitutionCount: 2688,
    kindergartenTeachers: 276.31,
    primaryTeachers: 626.91,
    juniorHighTeachers: 374.74,
    seniorHighTeachers: 185.92,
    higherEduTeachers: 174.01,
    preschoolGrossRate: 83.4,
    compulsoryRetentionRate: 94.8,
    seniorHighGrossRate: 89.5,
    higherEduGrossRate: 51.6,
  },
  {
    year: 2020,
    preschoolEnrollment: 4818.26,
    primaryEnrollment: 10725.35,
    juniorHighEnrollment: 4914.09,
    seniorHighEnrollment: 2494.45,
    vocationalEnrollment: 1663.37,
    higherEnrollment: 3285.29,
    graduateEnrollment: 313.96,
    kindergartenCount: 29.17,
    primarySchoolCount: 15.7979,
    juniorHighSchoolCount: 5.2805,
    seniorHighSchoolCount: 1.4235,
    higherEduInstitutionCount: 2738,
    kindergartenTeachers: 291.34,
    primaryTeachers: 643.42,
    juniorHighTeachers: 386.07,
    seniorHighTeachers: 193.32,
    higherEduTeachers: 183.3,
    preschoolGrossRate: 85.2,
    compulsoryRetentionRate: 95.2,
    seniorHighGrossRate: 91.2,
    higherEduGrossRate: 54.4,
  },
  {
    year: 2021,
    preschoolEnrollment: 4805.21,
    primaryEnrollment: 10800,
    juniorHighEnrollment: 5018.44,
    seniorHighEnrollment: 2605.03,
    vocationalEnrollment: 1311.81,
    higherEnrollment: 3496.13,
    graduateEnrollment: 333.24,
    kindergartenCount: 29.48,
    primarySchoolCount: 15.43,
    juniorHighSchoolCount: 5.29,
    seniorHighSchoolCount: 1.46,
    higherEduInstitutionCount: 2756,
    kindergartenTeachers: 319.1,
    primaryTeachers: 660.08,
    juniorHighTeachers: 397.11,
    seniorHighTeachers: 202.83,
    higherEduTeachers: 186.55,
    preschoolGrossRate: 88.1,
    compulsoryRetentionRate: 95.4,
    seniorHighGrossRate: 91.4,
    higherEduGrossRate: 57.8,
  },
  {
    year: 2022,
    preschoolEnrollment: 4627.55,
    primaryEnrollment: 10700,
    juniorHighEnrollment: 5120.6,
    seniorHighEnrollment: 2713.87,
    vocationalEnrollment: 1339.29,
    higherEnrollment: 3659.41,
    graduateEnrollment: 365.36,
    kindergartenCount: 28.92,
    primarySchoolCount: 14.91,
    juniorHighSchoolCount: 5.25,
    seniorHighSchoolCount: 1.5,
    higherEduInstitutionCount: 2760,
    kindergartenTeachers: 324.42,
    primaryTeachers: 662.94,
    juniorHighTeachers: 402.52,
    seniorHighTeachers: 213.32,
    higherEduTeachers: 196.31,
    preschoolGrossRate: 89.7,
    compulsoryRetentionRate: 95.5,
    seniorHighGrossRate: 91.6,
    higherEduGrossRate: 59.6,
  },
  {
    year: 2023,
    preschoolEnrollment: 4092.98,
    primaryEnrollment: 10800,
    juniorHighEnrollment: 5243.69,
    seniorHighEnrollment: 2803.63,
    vocationalEnrollment: 1298.46,
    higherEnrollment: 3775.01,
    graduateEnrollment: 388.29,
    kindergartenCount: 27.44,
    primarySchoolCount: 14.35,
    juniorHighSchoolCount: 5.23,
    seniorHighSchoolCount: 1.54,
    higherEduInstitutionCount: 2822,
    kindergartenTeachers: 307.37,
    primaryTeachers: 665.63,
    juniorHighTeachers: 408.31,
    seniorHighTeachers: 221.48,
    higherEduTeachers: 206.09,
    preschoolGrossRate: 91.1,
    compulsoryRetentionRate: 95.7,
    seniorHighGrossRate: 91.8,
    higherEduGrossRate: 60.2,
  },
  {
    year: 2024,
    preschoolEnrollment: 3583.99,
    primaryEnrollment: 10584.37,
    juniorHighEnrollment: 5386.16,
    seniorHighEnrollment: 2922.28,
    vocationalEnrollment: 1229.33,
    higherEnrollment: 3891.26,
    graduateEnrollment: 409.54,
    kindergartenCount: 25.33,
    primarySchoolCount: 13.63,
    juniorHighSchoolCount: 5.21,
    seniorHighSchoolCount: 1.58,
    higherEduInstitutionCount: 2870,
    kindergartenTeachers: 283.19,
    primaryTeachers: 659.01,
    juniorHighTeachers: 414.88,
    seniorHighTeachers: 230.18,
    higherEduTeachers: 214.99,
    preschoolGrossRate: 92,
    compulsoryRetentionRate: 95.9,
    seniorHighGrossRate: 92,
    higherEduGrossRate: 60.8,
  },
  {
    year: 2025,
    preschoolEnrollment: 3225.52,
    primaryEnrollment: 10178.29,
    juniorHighEnrollment: 5509.34,
    seniorHighEnrollment: 3039.5,
    vocationalEnrollment: 1118.77,
    higherEnrollment: 3953.96,
    graduateEnrollment: 429.95,
    kindergartenCount: 23.19,
    primarySchoolCount: 12.83,
    juniorHighSchoolCount: 5.16,
    seniorHighSchoolCount: 1.61,
    higherEduInstitutionCount: 2919,
    kindergartenTeachers: 261.26,
    primaryTeachers: 645.82,
    juniorHighTeachers: 423.95,
    seniorHighTeachers: 237.2,
    higherEduTeachers: 221.02,
    preschoolGrossRate: 92.9,
    compulsoryRetentionRate: 96.1,
    seniorHighGrossRate: 92,
    higherEduGrossRate: 61.3,
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
  { key: 'preschoolEnrollment', label: '学前教育', unit: '万人', color: '#c5503e' },
  { key: 'primaryEnrollment', label: '小学', unit: '万人', color: '#33736f' },
  { key: 'juniorHighEnrollment', label: '初中', unit: '万人', color: '#345f8b' },
  { key: 'seniorHighEnrollment', label: '普通高中', unit: '万人', color: '#9b6b36' },
  { key: 'vocationalEnrollment', label: '中等职业教育', unit: '万人', color: '#8a526f' },
  { key: 'higherEnrollment', label: '普通、职业本专科', unit: '万人', color: '#4f7653' },
  { key: 'graduateEnrollment', label: '研究生', unit: '万人', color: '#6d6092' },
]

export const schoolCountMetrics: MetricMeta[] = [
  { key: 'kindergartenCount', label: '幼儿园', unit: '万所', color: '#c5503e' },
  { key: 'primarySchoolCount', label: '普通小学', unit: '万所', color: '#33736f' },
  { key: 'juniorHighSchoolCount', label: '初中', unit: '万所', color: '#345f8b' },
  { key: 'seniorHighSchoolCount', label: '普通高中', unit: '万所', color: '#9b6b36' },
]

export const teacherMetrics: MetricMeta[] = [
  { key: 'kindergartenTeachers', label: '学前教育专任教师', unit: '万人', color: '#c5503e' },
  { key: 'primaryTeachers', label: '小学专任教师', unit: '万人', color: '#33736f' },
  { key: 'juniorHighTeachers', label: '初中专任教师', unit: '万人', color: '#345f8b' },
  { key: 'seniorHighTeachers', label: '普通高中专任教师', unit: '万人', color: '#9b6b36' },
  { key: 'higherEduTeachers', label: '普通、职业高校专任教师', unit: '万人', color: '#4f7653' },
]

export const grossRateMetrics: MetricMeta[] = [
  { key: 'preschoolGrossRate', label: '学前教育毛入园率', unit: '%', color: '#c5503e' },
  { key: 'compulsoryRetentionRate', label: '九年义务教育巩固率', unit: '%', color: '#33736f' },
  { key: 'seniorHighGrossRate', label: '高中阶段毛入学率', unit: '%', color: '#345f8b' },
  { key: 'higherEduGrossRate', label: '高等教育毛入学率', unit: '%', color: '#9b6b36' },
]
