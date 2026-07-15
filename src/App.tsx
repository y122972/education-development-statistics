import { useState } from 'react'
import './App.css'
import EducationLineChart from './components/EducationLineChart'
import {
  educationData,
  enrollmentMetrics,
  schoolCountMetrics,
  teacherMetrics,
  grossRateMetrics,
} from './data/educationData'

type TabId = 'enrollment' | 'schools' | 'teachers' | 'rates'

const tabs: { id: TabId; label: string }[] = [
  { id: 'enrollment', label: '在校生规模' },
  { id: 'schools', label: '学校数量' },
  { id: 'teachers', label: '专任教师' },
  { id: 'rates', label: '毛入学率' },
]

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('enrollment')

  return (
    <div className="app">
      <header className="app-header">
        <h1>全国教育事业发展统计</h1>
        <p>
          数据来源：
          <a
            href="http://www.moe.gov.cn/jyb_sjzl/sjzl_fztjgb/"
            target="_blank"
            rel="noreferrer"
          >
            中华人民共和国教育部全国教育事业发展统计公报
          </a>
          ，覆盖 2011–2023 年
        </p>
      </header>

      <nav className="tab-nav" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="charts-grid">
        {activeTab === 'enrollment' && (
          <>
            <EducationLineChart
              data={educationData}
              metrics={enrollmentMetrics.slice(0, 4)}
              title="基础教育各阶段在校生规模（2011–2023）"
              unit="万人"
            />
            <EducationLineChart
              data={educationData}
              metrics={enrollmentMetrics.slice(4)}
              title="职业教育与高等教育在校生规模（2011–2023）"
              unit="万人"
            />
          </>
        )}
        {activeTab === 'schools' && (
          <EducationLineChart
            data={educationData}
            metrics={schoolCountMetrics}
            title="各级学校数量变化（2011–2023）"
            unit="万所"
          />
        )}
        {activeTab === 'teachers' && (
          <EducationLineChart
            data={educationData}
            metrics={teacherMetrics}
            title="各级各类学校专任教师数量（2011–2023）"
            unit="万人"
          />
        )}
        {activeTab === 'rates' && (
          <EducationLineChart
            data={educationData}
            metrics={grossRateMetrics}
            title="各级教育毛入学率与巩固率（2011–2023）"
            unit="%"
          />
        )}
      </main>

      <footer className="app-footer">
        <p>
          注：数据来自教育部历年《全国教育事业发展统计公报》，如需获取最新数据，
          可运行 <code>pnpm scrape</code> 脚本。
        </p>
      </footer>
    </div>
  )
}

export default App
