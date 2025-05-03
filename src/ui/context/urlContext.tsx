import { createContext, ReactNode, useState } from "react";

interface UrlContextI {
  url: string | null
  setNewUrl: (url: string) => void
}

export const UrlContext = createContext<UrlContextI>({
  url: null,
  setNewUrl: (url: string) => url
})

export function UrlProvider ({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState<null | string>(null)

  const setNewUrl = (url: string) => {
    setUrl(url)
  }

  return (
    <UrlContext.Provider value={{
      url,
      setNewUrl
    }}>
      {children}
    </UrlContext.Provider>
  )
}