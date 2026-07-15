export function formatValue(value: number) {
  return value.toLocaleString('zh-CN', { maximumFractionDigits: 2 })
}

export function formatDelta(delta: number, unit: string) {
  const sign = delta > 0 ? '+' : ''
  if (unit === '%') return `${sign}${formatValue(delta)} 个百分点`
  return `${sign}${formatValue(delta)} ${unit}`
}

export function calculateChangeRate(current: number, baseline: number) {
  if (baseline === 0) return null
  return ((current - baseline) / Math.abs(baseline)) * 100
}

export function formatChangeRate(rate: number) {
  const sign = rate > 0 ? '+' : ''
  return `${sign}${formatValue(rate)}%`
}
