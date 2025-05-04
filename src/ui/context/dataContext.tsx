import { createContext, ReactNode, useState } from "react";

interface DataContextI {
  url: string | null
  setNewUrl: (url: string) => void
  values: SensorValues
  addValue: (newValue: SensorsValuesItem) => void
  maxValues: number
  setMaxValues: (newMaxValues: number) => void
}

export const DataContext = createContext<DataContextI>({
  url: null,
  setNewUrl: (url: string) => url,
  values: [],
  addValue: () => {},
  maxValues: 10,
  setMaxValues: () => {}
})

export function DataProvider ({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState<null | string>(null)
  const [maxValues, setMaxValues] = useState(20)
  const [values, setValues] = useState<SensorValues>([])

  const setNewUrl = (url: string) => {
    setUrl(url)
  }

  const addValue = (newValue: SensorsValuesItem) => {
    setValues(prev => {
      const p = [...prev]

      p.push(newValue)

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