interface TooltipProps {
  active?: boolean
  payload?: Array<{
    name: string
    value: number
  }>
  unit?: string
}

export default function CustomTooltip ({ active, payload, unit }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#333',
        border: 'none',
        borderRadius: '4px',
        padding: '8px',
        color: '#fff'
      }}>
        <p>{`${payload[0].value}${unit ? ` ${unit}` : ''}`}</p>
      </div>
    )
  }
  return null
}
