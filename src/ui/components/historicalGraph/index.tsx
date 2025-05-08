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
  console.log(values.length === 0 ? data : values)

  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <AreaChart data={data ?? values} margin={{ top: 10, bottom: 10, right: 10, left: 10 }}>
        <Area stroke={lineColor} fill={fillColor} dataKey={sensor} name={sensor} unit={unit} />
        <Tooltip separator=" - " />
        <CartesianGrid opacity={.2} />
        <YAxis dataKey={sensor} />
      </AreaChart>
    </ResponsiveContainer>
  )
}