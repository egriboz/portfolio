import React, { createContext, useEffect, useState } from 'react'
import { THEME } from '../components/Theme'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, themeSet] = useState('light')

  useEffect(() => {
    const theme = localStorage.getItem('THEME') || THEME.LIGHT
    themeSet(theme)
  }, [])

  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('THEME', theme)

  }
  useEffect(() => {
    console.log('init')
    if (!theme) return
    const html = document.querySelector('html')
    // console.log("localStorage", localStorage.THEME)
    if (localStorage.THEME === 'dark') {
      html.setAttribute('data-theme', 'light')
    } else {
      html.setAttribute('data-theme', 'dark')
    }
  }, [])

  useEffect(() => {
    console.log('update')
    if (!theme) return
    const html = document.querySelector('html')
    // console.log("localStorage", localStorage.THEME)
    if (localStorage.THEME === 'dark') {
      html.setAttribute('data-theme', 'light')
    } else {
      html.setAttribute('data-theme', 'dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext