import { createContext, ReactNode, useState } from "react";

interface DataContextI {
  url: string | null
  setNewUrl: (url: string) => void
  values: SensorValues | null
  addValue: (newValue: number, sensor: Sensors) => void
  maxValues: number
  setMaxValues: (newMaxValues: number) => void
}

export const DataContext = createContext<DataContextI>({
  url: null,
  setNewUrl: (url: string) => url,
  values: null,
  addValue: () => {},
  maxValues: 10,
  setMaxValues: () => {}
})

export function DataProvider ({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState<null | string>(null)
  const [maxValues, setMaxValues] = useState(20)
  const [values, setValues] = useState<SensorValues | null>(null)

  const setNewUrl = (url: string) => {
    setUrl(url)
  }

  const addValue = (newValue: number, sensor: Sensors) => {
    setValues(prev => {
      if (!prev) return null;

      const p = {...prev}

      if (sensor in p) {
        if (p[sensor].length === maxValues) {
          p[sensor].shift()
        }

        p[sensor].push(newValue)
      } else {
        p[sensor] = [newValue]
      }

      return p
    })
  }

  return (
    <DataContext.Provider value={{
      url,
      setNewUrl,
      values,
      addValue,
      maxValues,
      setMaxValues
    }}>
      {children}
    </DataContext.Provider>
  )
}