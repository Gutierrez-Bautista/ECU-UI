import { useEffect, useState } from "react"
import styles from './lights.module.css'

interface LightProps {
  size: `${number}px`
  color: `#${string}`
}

function Light ({ size, color, isOn }: LightProps & { isOn: boolean }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '99999999999px',
      backgroundColor: color,
      boxShadow: isOn ? `0 0 4px 2px ${color}` : undefined,
      opacity: isOn ? 1 : 0.7
    }} />
  )
}

interface Props extends LightProps {
  quantity: number,
  label: string
  sensor?: Sensors
  direction?: 'to-right' | 'to-top' | 'to-bottom' | 'to-left'
}

export default function LightsGraph ({ quantity, label, color, size, direction = 'to-right' }: Props) {
  const [lights, setLights] = useState(Array(quantity).fill(false))

  useEffect(() => {
    setLights(p => {
      const aux = [...p]
      aux[0] = true
      aux[1] = true
      return aux
    })
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={styles.container} style={{
        flexDirection: direction === 'to-left'
          ? 'row-reverse'
          : direction === 'to-bottom'
          ? 'column'
          : direction === 'to-top'
          ? 'column-reverse'
          : undefined
      }}>
        {
          lights.map((v) => {
            return <Light color={color} size={size} isOn={v} />
          })
        }
      </div>
      <span>{label}</span>
    </div>
  )
}