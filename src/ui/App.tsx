import { useContext } from 'react'
import './App.css'
import { UrlContext, UrlProvider } from './context/urlContext'
import IndexPage from './pages/index'
import DataPage from './pages/Data'

function AppContent () {
  const { url } = useContext(UrlContext)

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
    <UrlProvider>
      <AppContent />
    </UrlProvider>
  )
}

export default App
