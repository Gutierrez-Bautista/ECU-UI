import { useContext } from "react"
import { DataContext } from "../../context/dataContext"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, YAxis } from "recharts"

interface Props {
  fillColor?: `#${string}`
  lineColor?: `#${string}`
  sensor: Sensors
  data?: Partial<SensorValues>
  unit?: string
}

export default function HistoricalGraph ({ fillColor = '#05a', lineColor = '#05a', sensor, data, unit }: Props) {
  const { values } = useContext(DataContext)

  console.log(sensor)
  console.log(values ?? 'No Values')

  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <AreaChart data={data ?? values}>
        <Area stroke={lineColor} fill={fillColor} dataKey={sensor} name={sensor} unit={unit} />
        <Tooltip />
        <CartesianGrid opacity={.2} />
        <YAxis dataKey={sensor} />
      </AreaChart>
    </ResponsiveContainer>
  )
}