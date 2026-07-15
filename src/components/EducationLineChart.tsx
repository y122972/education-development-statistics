import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import type { MetricMeta, YearData } from '../data/educationData'

interface EducationLineChartProps {
  data: YearData[]
  metrics: MetricMeta[]
  title: string
  unit: string
  /** 隐藏某些系列的 key */
  hiddenKeys?: Set<string>
  onToggle?: (key: string) => void
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
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-year">{label} 年</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color }}>
          {entry.name}: <strong>{entry.value.toLocaleString('zh-CN')}</strong> {unit}
        </p>
      ))}
    </div>
  )
}

export default function EducationLineChart({
  data,
  metrics,
  title,
  unit,
  hiddenKeys = new Set(),
  onToggle,
}: EducationLineChartProps) {
  const visibleMetrics = metrics.filter((m) => !hiddenKeys.has(m.key))

  return (
    <div className="chart-card">
      <h2 className="chart-title">{title}</h2>
      <ResponsiveContainer width="100%" height={380}>
        <LineChart data={data} margin={{ top: 8, right: 24, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="year"
            tick={{ fill: 'var(--text)', fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'var(--text)', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            unit={` ${unit}`}
            width={80}
          />
          <Tooltip content={<CustomTooltip unit={unit} />} />
          <Legend
            onClick={(e) => onToggle?.(e.dataKey as string)}
            wrapperStyle={{ cursor: onToggle ? 'pointer' : 'default', fontSize: 13 }}
          />
          {visibleMetrics.map((m) => (
            <Line
              key={m.key}
              type="monotone"
              dataKey={m.key}
              name={m.label}
              stroke={m.color}
              strokeWidth={2}
              dot={{ r: 3, fill: m.color }}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
