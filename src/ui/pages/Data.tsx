import { useState } from "react"
import { Views } from "./types"
import HistoricalView from "../views/HistoricalView"
import Header from "../components/Header"

export default function DataPage () {
  const [currentView, setCurrentView] = useState<Views>(Views.HISTORICAL)

  return (
    <main>
      <span>currentView: {currentView}</span>
      <Header title="Data Page" updateViewFunc={setCurrentView} />
      {
        currentView === Views.HISTORICAL
          ? <HistoricalView />
          : <span>Vista no Creada</span>
      }
    </main>
  )
}