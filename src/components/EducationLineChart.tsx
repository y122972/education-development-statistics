import { useMemo, useState } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { MetricMeta, YearData } from '../data/educationData'

interface EducationLineChartProps {
  data: YearData[]
  metrics: MetricMeta[]
  title: string
  description: string
  unit: string
}

function formatChartValue(value: number) {
  return value.toLocaleString('zh-CN', { maximumFractionDigits: 2 })
}

function CustomTooltip({
  active,
  payload,
  label,
  unit,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: number
  unit: string
}) {
  if (!active || !payload?.length) return null

  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-year">{label} 年</p>
      <div className="chart-tooltip-values">
        {payload.map((entry) => (
          <p key={entry.name}>
            <span className="tooltip-dot" style={{ background: entry.color }} />
            <span>{entry.name}</span>
            <strong>{formatChartValue(entry.value)}</strong>
            <small>{unit}</small>
          </p>
        ))}
      </div>
    </div>
  )
}

export default function EducationLineChart({
  data,
  metrics,
  title,
  description,
  unit,
}: EducationLineChartProps) {
  const [hiddenKeys, setHiddenKeys] = useState<Set<string>>(() => new Set())
  const visibleMetrics = useMemo(
    () => metrics.filter((metric) => !hiddenKeys.has(metric.key)),
    [hiddenKeys, metrics],
  )
  const latest = data.at(-1)

  function toggleMetric(key: string) {
    setHiddenKeys((current) => {
      const next = new Set(current)
      if (next.has(key)) {
        next.delete(key)
      } else if (visibleMetrics.length > 1) {
        next.add(key)
      }
      return next
    })
  }

  return (
    <section className="chart-panel" aria-labelledby="trend-chart-title">
      <header className="chart-header">
        <div>
          <p className="section-kicker">跨年趋势 · 单位：{unit}</p>
          <h2 id="trend-chart-title">{title}</h2>
          <p>{description}</p>
        </div>
      </header>

      <div className="series-legend" aria-label="切换图表指标">
        {metrics.map((metric) => {
          const isVisible = !hiddenKeys.has(metric.key)
          const latestValue = latest?.[metric.key]
          return (
            <button
              type="button"
              key={metric.key}
              className={isVisible ? 'active' : ''}
              aria-pressed={isVisible}
              onClick={() => toggleMetric(metric.key)}
            >
              <span className="series-dot" style={{ background: metric.color }} />
              <span>{metric.label}</span>
              {typeof latestValue === 'number' && <strong>{formatChartValue(latestValue)}</strong>}
            </button>
          )
        })}
      </div>

      <div className="chart-canvas">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            accessibilityLayer
            data={data}
            margin={{ top: 12, right: 14, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="var(--line)" />
            <XAxis
              dataKey="year"
              tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: 'var(--line-strong)' }}
              minTickGap={24}
            />
            <YAxis
              tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={58}
              tickFormatter={formatChartValue}
              domain={['auto', 'auto']}
            />
            <Tooltip
              cursor={{ stroke: 'var(--ink)', strokeDasharray: '4 4', strokeOpacity: 0.35 }}
              content={<CustomTooltip unit={unit} />}
            />
            {visibleMetrics.map((metric) => (
              <Line
                key={metric.key}
                type="monotone"
                dataKey={metric.key}
                name={metric.label}
                stroke={metric.color}
                strokeWidth={2.4}
                dot={false}
                activeDot={{ r: 5, fill: metric.color, stroke: 'var(--surface)', strokeWidth: 2 }}
                isAnimationActive={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
