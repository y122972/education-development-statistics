export interface BulletinValue {
  label: string
  raw: string
  value: number | null
  unit: string
}

export interface BulletinStatement {
  section: string
  text: string
  values: BulletinValue[]
}

export interface BulletinDocument {
  year: number
  title: string
  sourceUrl: string
  publishedDate: string
  statements: BulletinStatement[]
  notes: string[]
}

export interface BulletinSummary {
  year: number
  publishedDate: string
  sourceUrl: string
}

export const bulletinIndex: BulletinSummary[] = [
  {
    year: 2025,
    publishedDate: '2026-07-06',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202607/t20260706_1442870.html',
  },
  {
    year: 2024,
    publishedDate: '2025-06-11',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202506/t20250611_1193760.html',
  },
  {
    year: 2023,
    publishedDate: '2024-10-24',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202410/t20241024_1159002.html',
  },
  {
    year: 2022,
    publishedDate: '2023-07-05',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202307/t20230705_1067278.html',
  },
  {
    year: 2021,
    publishedDate: '2022-09-14',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202209/t20220914_660850.html',
  },
  {
    year: 2020,
    publishedDate: '2021-08-27',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202108/t20210827_555004.html',
  },
  {
    year: 2019,
    publishedDate: '2020-05-20',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/202005/t20200520_456751.html',
  },
  {
    year: 2018,
    publishedDate: '2019-07-24',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/201907/t20190724_392041.html',
  },
  {
    year: 2017,
    publishedDate: '2018-07-19',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/201807/t20180719_343508.html',
  },
  {
    year: 2016,
    publishedDate: '2017-07-10',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/201707/t20170710_309042.html',
  },
  {
    year: 2015,
    publishedDate: '2016-07-06',
    sourceUrl:
      'https://www.moe.gov.cn/srcsite/A03/s180/moe_633/201607/t20160706_270976.html',
  },
  {
    year: 2014,
    publishedDate: '2015-08-11',
    sourceUrl:
      'https://www.moe.gov.cn/srcsite/A03/s180/moe_633/201508/t20150811_199589.html',
  },
  {
    year: 2013,
    publishedDate: '2014-07-04',
    sourceUrl:
      'https://www.moe.gov.cn/srcsite/A03/s180/moe_633/201407/t20140704_171144.html',
  },
  {
    year: 2012,
    publishedDate: '2013-08-16',
    sourceUrl:
      'https://www.moe.gov.cn/srcsite/A03/s180/moe_633/201308/t20130816_155798.html',
  },
  {
    year: 2011,
    publishedDate: '2012-08-30',
    sourceUrl:
      'https://www.moe.gov.cn/srcsite/A03/s180/moe_633/201208/t20120830_141305.html',
  },
  {
    year: 2010,
    publishedDate: '2012-03-21',
    sourceUrl:
      'https://www.moe.gov.cn/srcsite/A03/s180/moe_633/201203/t20120321_132634.html',
  },
  {
    year: 2009,
    publishedDate: '2010-08-03',
    sourceUrl:
      'https://www.moe.gov.cn/srcsite/A03/s180/moe_633/201008/t20100803_93763.html',
  },
  {
    year: 2008,
    publishedDate: '2009-07-17',
    sourceUrl:
      'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/201002/t20100205_88488.html',
  },
  {
    year: 2007,
    publishedDate: '2008-05-20',
    sourceUrl:
      'https://www.moe.gov.cn/srcsite/A03/s180/moe_633/200805/t20080505_88458.html',
  },
  {
    year: 2006,
    publishedDate: '2007-06-08',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_23240.html',
  },
  {
    year: 2005,
    publishedDate: '2006-07-04',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_15809.html',
  },
  {
    year: 2004,
    publishedDate: '2005-07-27',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_10934.html',
  },
  {
    year: 2003,
    publishedDate: '2004-05-27',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_3570.html',
  },
  {
    year: 2002,
    publishedDate: '2003-05-13',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_1553.html',
  },
  {
    year: 2001,
    publishedDate: '2002-06-13',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_844.html',
  },
  {
    year: 2000,
    publishedDate: '2001-06-01',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_843.html',
  },
  {
    year: 1999,
    publishedDate: '2000-05-30',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_841.html',
  },
  {
    year: 1998,
    publishedDate: '1999-05-01',
    sourceUrl: 'https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/tnull_842.html',
  },
]

export function bulletinAssetUrl(year: number, extension: 'json' | 'md') {
  return `${import.meta.env.BASE_URL}data/bulletins/${year}.${extension}`
}
