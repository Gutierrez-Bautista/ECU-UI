import { useContext, useState } from 'react';
import styles from './temp.module.css'
import { DataContext } from '../../context/dataContext';

interface ThermometerProps {
  width?: `${number}px`
  height?: `${number}px`
  steps?: number
  minValue?: number
  maxValue?: number
  unit?: 'ºC' | 'ºK' | 'ºF'
  sensor: Sensors
  label: string
};

export default function TempGraph({
  width = '20px',
  height = '100px',
  minValue = 0,
  maxValue = 100,
  unit = 'ºC',
  sensor,
  label
}: ThermometerProps) {
  const { values } = useContext(DataContext)
  const [seeTooltip, setSeeTooltip] = useState(false)

  const aux = values.at(-1)
  
  if (!aux) {
    throw new Error("DATA ERROR")
  }
  
  const range = maxValue - minValue
  const currentValue = aux[sensor]
  const percentage = 100 - ((currentValue - minValue) / range * 100)

  return (
    <div
      className={styles.container}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px'
      }}
    >
      <div style={{ position: 'relative', width, height }}>
        <div
          className={styles.thermometer}
          style={{
            width: width,
            height: height,
            }}
          onMouseEnter={() => { setSeeTooltip(true) }}
          onMouseLeave={() => { setSeeTooltip(false) }}
        >
          <div
            className={`${styles.bg}`}
          >
          </div>
          <div className={styles.coverer} style={{
            height: `${percentage}%`
          }}></div>

        </div>
        <p className={styles.tooltip} hidden={!seeTooltip}>{currentValue}{unit}</p>
      </div>
      <span>{label}</span>
    </div>
  );
}
