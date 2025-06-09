import { useState } from "react"
import { Views } from "../types/main"
import HistoricalView from "../views/HistoricalView"
import Header from "../components/Header"
import DigitalView from "../views/DigitalView"

export default function DataPage () {
  const [currentView, setCurrentView] = useState<Views>(Views.HISTORICAL)

  return (
    <main>
      <span>currentView: {currentView}</span>
      <Header title="Data Page" updateViewFunc={setCurrentView} />
      {
        currentView === Views.HISTORICAL
          ? <HistoricalView />
          : currentView === Views.DIGITAL
          ? <DigitalView />
          : <span>Vista no Creada</span>
      }
    </main>
  )
}