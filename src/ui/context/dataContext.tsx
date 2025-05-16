import { createContext, ReactNode, useEffect, useRef, useState } from "react";

interface DataContextI {
  url: string | null
  setNewUrl: (url: string) => void
  values: SensorValues
}

export const DataContext = createContext<DataContextI>({
  url: null,
  setNewUrl: (url: string) => url,
  values: []
})

const DEFAULT_SENSOR_VALUES: SensorsValuesItem = { 'rpm': 0, 'lambda': 0, 'engine-temp': 0 }

export function DataProvider ({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState<null | string>(null)
  const maxValues = useRef(15)
  const [values, setValues] = useState<SensorValues>(Array(maxValues.current).fill(DEFAULT_SENSOR_VALUES))
  const webSocket = useRef<null | WebSocket>(null)

  const setNewUrl = (url: string) => {
    setUrl(url)
  }

  const addValue = (newValue: SensorsValuesItem) => {
    setValues(prev => {
      const p = [...prev, newValue]
      p.shift()

      return p
    })
  }

  useEffect(() => {
    const messageHandler = (evt: MessageEvent) => {
      try {
        addValue(JSON.parse(evt.data))
      } catch (e) {
        console.error(e)
        alert(`${url} response isnt valid JSON`)
        setUrl(null)
      }
    }

    const errorHandler = () => {
      alert(`Connection with "${url}" failed`)
      setUrl(null)
    }

    if (url) {
      webSocket.current = new WebSocket(url)
      webSocket.current.addEventListener('message', messageHandler)
      webSocket.current.addEventListener('error', errorHandler)
    }

    return () => {
      if (webSocket.current) {
        webSocket.current.removeEventListener('message', messageHandler)
        webSocket.current.removeEventListener('error', errorHandler)
        webSocket.current.close(1000)
      }
    }
  }, [url])

  return (
    <DataContext.Provider value={{
      url,
      setNewUrl,
      values
    }}>
      {children}
    </DataContext.Provider>
  )
}