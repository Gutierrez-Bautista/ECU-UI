import { useContext } from "react"
import { DataContext } from "../../context/dataContext"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, YAxis } from "recharts"
import CustomTooltip from "./Tooltip"

interface Props {
  fillColor?: `#${string}`
  lineColor?: `#${string}`
  sensor: Sensors
  data?: Partial<SensorValues>
  unit?: string
  animationDuration?: number
}

export default function HistoricalGraph ({ fillColor = '#05a', lineColor = '#05a', sensor, data, unit, animationDuration = 300 }: Props) {
  const { values } = useContext(DataContext)

  return (
    <div style={{width: '100%', height: '100%'}}>
      <h4>{sensor}</h4>
      <ResponsiveContainer width={'100%'} height={200}>
        <AreaChart data={data ?? values} margin={{ top: 10, bottom: 10, right: 10, left: 10 }}>
          <Area 
            stroke={lineColor} 
            fill={fillColor} 
            dataKey={sensor} 
            name={sensor} 
            animationDuration={animationDuration}
          />
          <Tooltip content={<CustomTooltip unit={unit} />} />
          <CartesianGrid opacity={.2} />
          <YAxis dataKey={sensor} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}