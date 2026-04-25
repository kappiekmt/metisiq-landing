import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('metisiq-theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('metisiq-theme', dark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
