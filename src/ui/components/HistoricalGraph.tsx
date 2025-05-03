interface Props {
  color?: `#${string}`
}

export default function HistoricalGraph ({ color = '#09f' }: Props) {
  return <div style={{width: '20px', height: '20px', backgroundColor: color}}></div>
}