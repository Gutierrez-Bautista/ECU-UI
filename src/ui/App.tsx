import { useContext } from 'react'
import './App.css'
import { DataContext, DataProvider } from './context/dataContext'
import IndexPage from './pages/index'
import DataPage from './pages/Data'

function AppContent () {
  const { url } = useContext(DataContext)

  return (
    <>
      {
        !url
          ? <IndexPage />
          : <DataPage />
      }
    </>
  )
}

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  )
}

export default App
