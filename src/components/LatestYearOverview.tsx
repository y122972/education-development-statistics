import type { MetricMeta, YearData } from '../data/educationData'
import {
  calculateChangeRate,
  formatChangeRate,
  formatDelta,
  formatValue,
} from '../data/statisticsFormatting'

interface SnapshotCategory {
  id: string
  label: string
  description: string
  metrics: MetricMeta[]
}

interface HeadlineMetric {
  key: keyof Omit<YearData, 'year'>
  label: string
  unit: string
}

interface LatestYearOverviewProps {
  latest: YearData
  previous: YearData
  categories: SnapshotCategory[]
  headlineMetrics: HeadlineMetric[]
  onOpenArchive: () => void
}

function ChangeText({ current, baseline, unit }: {
  current: number | null
  baseline: number | null
  unit: string
}) {
  if (typeof current !== 'number') return <span className="snapshot-unavailable">本年未单列</span>
  if (typeof baseline !== 'number') return <span className="snapshot-unavailable">上年无可比数据</span>

  const delta = current - baseline
  const rate = calculateChangeRate(current, baseline)

  return (
    <span className={delta < 0 ? 'negative' : 'positive'}>
      {formatDelta(delta, unit)}
      {typeof rate === 'number' && <> · 同比 {formatChangeRate(rate)}</>}
    </span>
  )
}

export default function LatestYearOverview({
  latest,
  previous,
  categories,
  headlineMetrics,
  onOpenArchive,
}: LatestYearOverviewProps) {
  return (
    <div className="overview-page snapshot-page" data-screen-label="年度速览">
      <section className="snapshot-hero">
        <div className="snapshot-title-block">
          <p className="eyebrow">全国教育事业发展统计公报 · 最新年度</p>
          <p className="snapshot-year" aria-hidden="true">{latest.year}</p>
          <h1>{latest.year} 年教育数据速览</h1>
          <p className="hero-intro">
            集中展示最新公报中的学校、学生、教师与教育普及数据，
            并与 {previous.year} 年同项指标直接对比。
          </p>
        </div>
        <div className="snapshot-compare-mark">
          <span>对比基准</span>
          <strong>{previous.year}</strong>
          <small>绝对变化 · 同比</small>
        </div>
      </section>

      <section className="headline-grid snapshot-headlines" aria-label={`${latest.year} 年重点数据`}>
        {headlineMetrics.map((metric) => {
          const current = latest[metric.key]
          const baseline = previous[metric.key]
          return (
            <article className="headline-stat" key={metric.key}>
              <p>{metric.label}</p>
              <div>
                <strong>{typeof current === 'number' ? formatValue(current) : '—'}</strong>
                <span>{metric.unit}</span>
              </div>
              <small>
                <ChangeText current={current} baseline={baseline} unit={metric.unit} />
              </small>
            </article>
          )
        })}
      </section>

      <section className="snapshot-data-section">
        <header className="section-heading-row snapshot-section-heading">
          <div>
            <p className="section-kicker">01 · 全部指标</p>
            <h2>{latest.year} 与 {previous.year} 年对照</h2>
          </div>
          <p>人数统一为万人，基础教育学校数统一为万所；百分比指标的绝对变化使用百分点。</p>
        </header>

        <div className="snapshot-category-grid">
          {categories.map((category, categoryIndex) => (
            <article className="snapshot-category" key={category.id}>
              <header>
                <span>{String(categoryIndex + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{category.label}</h3>
                  <p>{category.description}</p>
                </div>
              </header>
              <div className="snapshot-table" role="table" aria-label={category.label}>
                <div className="snapshot-table-header" role="row">
                  <span role="columnheader">指标</span>
                  <span role="columnheader">{previous.year}</span>
                  <span role="columnheader">{latest.year}</span>
                  <span role="columnheader">变化</span>
                </div>
                {category.metrics.map((metric) => {
                  const current = latest[metric.key]
                  const baseline = previous[metric.key]
                  return (
                    <div className="snapshot-row" role="row" key={metric.key}>
                      <span className="snapshot-metric" role="cell">
                        <i style={{ background: metric.color }} aria-hidden="true" />
                        {metric.label}
                      </span>
                      <span className="snapshot-number snapshot-baseline" role="cell">
                        {typeof baseline === 'number' ? formatValue(baseline) : '—'}
                        <small>{metric.unit}</small>
                      </span>
                      <strong className="snapshot-number" role="cell">
                        {typeof current === 'number' ? formatValue(current) : '—'}
                        <small>{metric.unit}</small>
                      </strong>
                      <span className="snapshot-change" role="cell">
                        <ChangeText current={current} baseline={baseline} unit={metric.unit} />
                      </span>
                    </div>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="snapshot-source-strip">
        <div>
          <p className="section-kicker">02 · 原文核验</p>
          <h2>查看 {latest.year} 年公报原句与完整正文</h2>
        </div>
        <p>速览只做同项数据对比；统计范围、口径变化与脚注以教育部公报原文为准。</p>
        <button type="button" onClick={onOpenArchive}>打开最新公报</button>
      </section>
    </div>
  )
}
