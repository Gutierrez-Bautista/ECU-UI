import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/dataContext"

interface Props {
  color?: `#${string}`
  sensor: Sensors
}

export default function HistoricalGraph ({ color = '#09f', sensor }: Props) {
  const { values } = useContext(DataContext)
  const [maxValue, setMaxValue] = useState(0)

  console.log(sensor)
  console.log(values ?? 'No Values')

  useEffect(() => {
    if (values && values[sensor]) {
      let m = 0
      values[sensor].forEach(v => {
        if (v > m) m = v;
      })
      setMaxValue(m)
    } 
  }, [values, sensor])

  return (
    <div style={{width: '20px', height: '20px', backgroundColor: color}}>
      {maxValue}
    </div>
  )
}