import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import './App.css'
import {
  educationData,
  enrollmentMetrics,
  grossRateMetrics,
  schoolCountMetrics,
  teacherMetrics,
  type MetricMeta,
  type YearData,
} from './data/educationData'
import {
  calculateChangeRate,
  formatChangeRate,
  formatDelta,
  formatValue,
} from './data/statisticsFormatting'

const EducationLineChart = lazy(() => import('./components/EducationLineChart'))
const BulletinArchive = lazy(() => import('./components/BulletinArchive'))
const LatestYearOverview = lazy(() => import('./components/LatestYearOverview'))

type ViewId = 'snapshot' | 'overview' | 'archive'
type CategoryId = 'enrollment' | 'schools' | 'teachers' | 'rates'

interface Category {
  id: CategoryId
  label: string
  title: string
  description: string
  unit: string
  metrics: MetricMeta[]
}

const categories: Category[] = [
  {
    id: 'enrollment',
    label: '学生规模',
    title: '各级教育在校生规模',
    description: '观察不同学段规模变化；2021 年中职口径发生调整，跨点比较需结合原文。',
    unit: '万人',
    metrics: enrollmentMetrics,
  },
  {
    id: 'schools',
    label: '学校数量',
    title: '基础教育学校数量',
    description: '学校数量变化同时受到适龄人口、城镇化与布局调整影响。',
    unit: '万所',
    metrics: schoolCountMetrics,
  },
  {
    id: 'teachers',
    label: '专任教师',
    title: '各级学校专任教师数量',
    description: '对比各学段教师队伍规模；早期公报未单列学前专任教师的年份保留为空。',
    unit: '万人',
    metrics: teacherMetrics,
  },
  {
    id: 'rates',
    label: '普及水平',
    title: '教育普及与巩固水平',
    description: '毛入学率与巩固率反映各阶段教育机会覆盖程度。',
    unit: '%',
    metrics: grossRateMetrics,
  },
]

const snapshotCategories = categories.map((category) => {
  if (category.id !== 'schools') return category
  return {
    ...category,
    label: '学校数量',
    description: '对照基础教育学校与普通、职业高等学校的最新规模。',
    metrics: [
      ...category.metrics,
      {
        key: 'higherEduInstitutionCount',
        label: '普通、职业高等学校',
        unit: '所',
        color: '#4f7653',
      } satisfies MetricMeta,
    ],
  }
})

const headlineMetrics: Array<{
  key: keyof Omit<YearData, 'year'>
  label: string
  unit: string
}> = [
  { key: 'primaryEnrollment', label: '小学在校生', unit: '万人' },
  { key: 'juniorHighEnrollment', label: '初中在校生', unit: '万人' },
  { key: 'higherEnrollment', label: '高校本专科在校生', unit: '万人' },
  { key: 'higherEduGrossRate', label: '高等教育毛入学率', unit: '%' },
]

function LoadingPanel() {
  return (
    <div className="content-loading" role="status">
      <span className="loading-mark" aria-hidden="true" />
      正在载入数据视图…
    </div>
  )
}

function App() {
  const [view, setView] = useState<ViewId>(() => {
    if (window.location.hash.startsWith('#archive')) return 'archive'
    if (window.location.hash.startsWith('#overview')) return 'overview'
    return 'snapshot'
  })
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>('enrollment')
  const [selectedYear, setSelectedYear] = useState(
    () => educationData.at(-1)?.year ?? new Date().getFullYear(),
  )
  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0]
  const latest = educationData.at(-1)
  const previous = educationData.at(-2)
  const earliest = educationData[0]
  const selectedYearIndex = educationData.findIndex((item) => item.year === selectedYear)
  const selectedData = educationData[selectedYearIndex]
  const comparisonData = selectedYearIndex > 0 ? educationData[selectedYearIndex - 1] : undefined

  const categoryChanges = useMemo(() => {
    if (!selectedData) return []
    return activeCategory.metrics.map((metric) => {
      const current = selectedData[metric.key]
      const baseline = comparisonData?.[metric.key]
      return {
        ...metric,
        current,
        delta:
          typeof current === 'number' && typeof baseline === 'number'
            ? current - baseline
            : null,
        changeRate:
          typeof current === 'number' && typeof baseline === 'number'
            ? calculateChangeRate(current, baseline)
            : null,
      }
    })
  }, [activeCategory, comparisonData, selectedData])

  useEffect(() => {
    function syncViewWithHash() {
      if (window.location.hash.startsWith('#archive')) {
        setView('archive')
      } else if (window.location.hash.startsWith('#overview')) {
        setView('overview')
      } else {
        setView('snapshot')
      }
    }

    window.addEventListener('hashchange', syncViewWithHash)
    return () => window.removeEventListener('hashchange', syncViewWithHash)
  }, [])

  function navigate(nextView: ViewId) {
    const nextHash = `#${nextView}`
    if (window.location.hash === nextHash) {
      setView(nextView)
    } else {
      window.location.hash = nextHash
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={() => navigate('snapshot')}>
          <span className="brand-seal" aria-hidden="true">教</span>
          <span>
            <strong>中国教育数据档案</strong>
            <small>Education statistics archive</small>
          </span>
        </button>

        <nav className="primary-nav" aria-label="主要页面">
          <button
            type="button"
            className={view === 'snapshot' ? 'active' : ''}
            aria-current={view === 'snapshot' ? 'page' : undefined}
            onClick={() => navigate('snapshot')}
          >
            年度速览
          </button>
          <button
            type="button"
            className={view === 'overview' ? 'active' : ''}
            aria-current={view === 'overview' ? 'page' : undefined}
            onClick={() => navigate('overview')}
          >
            长期趋势
          </button>
          <button
            type="button"
            className={view === 'archive' ? 'active' : ''}
            aria-current={view === 'archive' ? 'page' : undefined}
            onClick={() => navigate('archive')}
          >
            公报档案
          </button>
        </nav>

        <a
          className="header-source"
          href="https://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/"
          target="_blank"
          rel="noreferrer"
        >
          数据来源：教育部 <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        {view === 'snapshot' && latest && previous ? (
          <Suspense fallback={<LoadingPanel />}>
            <LatestYearOverview
              latest={latest}
              previous={previous}
              categories={snapshotCategories}
              headlineMetrics={headlineMetrics}
              onOpenArchive={() => navigate('archive')}
            />
          </Suspense>
        ) : view === 'overview' ? (
          <div className="overview-page" data-screen-label="趋势总览">
            <section className="hero-section">
              <div className="hero-copy">
                <p className="eyebrow">全国教育事业发展统计公报 · {earliest?.year}—{latest?.year}</p>
                <h1>读懂中国教育的<br />长期变化</h1>
                <p className="hero-intro">
                  把分散在历年公报中的学校、学生、教师与教育普及数据，整理成可比较、
                  可回到原文核验的长期档案。
                </p>
              </div>
              <div className="hero-stamp" aria-label={`最新数据年份 ${latest?.year} 年`}>
                <span>最新公报数据</span>
                <strong>{latest?.year}</strong>
                <small>共 {educationData.length} 个年度</small>
              </div>
            </section>

            <section className="headline-grid" aria-label={`${latest?.year} 年重点数据`}>
              {headlineMetrics.map((metric) => {
                const current = latest?.[metric.key]
                const baseline = previous?.[metric.key]
                const delta =
                  typeof current === 'number' && typeof baseline === 'number'
                    ? current - baseline
                    : null
                const changeRate =
                  typeof current === 'number' && typeof baseline === 'number'
                    ? calculateChangeRate(current, baseline)
                    : null
                return (
                  <article className="headline-stat" key={metric.key}>
                    <p>{metric.label}</p>
                    <div>
                      <strong>{typeof current === 'number' ? formatValue(current) : '—'}</strong>
                      <span>{metric.unit}</span>
                    </div>
                    {typeof delta === 'number' ? (
                      <small className={delta < 0 ? 'negative' : 'positive'}>
                        较上年 {formatDelta(delta, metric.unit)}
                        {typeof changeRate === 'number' && (
                          <> · 同比 {formatChangeRate(changeRate)}</>
                        )}
                      </small>
                    ) : (
                      <small>该年公报未单列</small>
                    )}
                  </article>
                )
              })}
            </section>

            <section className="trend-section">
              <div className="section-heading-row">
                <div>
                  <p className="section-kicker">01 · 长期趋势</p>
                  <h2>选择一个观察维度</h2>
                </div>
                <p>悬停年份查看数据，点击图表可切换右侧年度面板；点击指标标签可隐藏曲线。</p>
              </div>

              <div className="category-switch" role="tablist" aria-label="趋势指标类别">
                {categories.map((category) => (
                  <button
                    type="button"
                    role="tab"
                    key={category.id}
                    aria-selected={activeCategoryId === category.id}
                    className={activeCategoryId === category.id ? 'active' : ''}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <div className="trend-grid">
                <Suspense fallback={<LoadingPanel />}>
                  <EducationLineChart
                    key={activeCategory.id}
                    data={educationData}
                    metrics={activeCategory.metrics}
                    title={activeCategory.title}
                    description={activeCategory.description}
                    unit={activeCategory.unit}
                    selectedYear={selectedYear}
                    onYearSelect={setSelectedYear}
                  />
                </Suspense>

                <aside className="change-panel">
                  <p className="section-kicker">{selectedData?.year} 年数据</p>
                  <h3>
                    {comparisonData ? `较 ${comparisonData.year} 年度` : '首个收录年度'}
                  </h3>
                  <div className="change-list">
                    {categoryChanges.map((metric) => (
                      <div className="change-item" key={metric.key}>
                        <span>{metric.label}</span>
                        <strong>
                          {typeof metric.current === 'number' ? formatValue(metric.current) : '—'}
                        </strong>
                        {typeof metric.delta === 'number' && (
                          <small className={metric.delta < 0 ? 'negative' : 'positive'}>
                            {formatDelta(metric.delta, activeCategory.unit)}
                            {typeof metric.changeRate === 'number' && (
                              <> · 同比 {formatChangeRate(metric.changeRate)}</>
                            )}
                          </small>
                        )}
                        {typeof metric.delta !== 'number' && (
                          <small className="unavailable">
                            {typeof metric.current === 'number' ? '暂无上年可比数据' : '该年公报未单列'}
                          </small>
                        )}
                      </div>
                    ))}
                  </div>
                  <button className="archive-cta" type="button" onClick={() => navigate('archive')}>
                    去公报原文核验 <span aria-hidden="true">→</span>
                  </button>
                </aside>
              </div>
            </section>

            <section className="method-section">
              <div>
                <p className="section-kicker">02 · 数据说明</p>
                <h2>每一个数字，都能回到出处</h2>
              </div>
              <p>
                趋势数据按教育部历年公报的原始口径整理；遇到统计口径或名称变化时，
                原句与单位会保留在对应年度档案中。图表用于观察变化，不替代官方公报。
              </p>
              <button type="button" onClick={() => navigate('archive')}>
                浏览全部年度公报
              </button>
            </section>
          </div>
        ) : (
          <div className="archive-page" data-screen-label="公报档案">
            <Suspense fallback={<LoadingPanel />}>
              <BulletinArchive />
            </Suspense>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <span>中国教育数据档案</span>
        <p>数据来源：中华人民共和国教育部《全国教育事业发展统计公报》</p>
        <span>更新于 2026 年 7 月</span>
      </footer>
    </div>
  )
}

export default App
