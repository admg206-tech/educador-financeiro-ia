import React, { createContext, useContext, useEffect, useState } from 'react'
import { Theme } from '@/types'

const ThemeContext = createContext<Theme | undefined>(undefined)

function getStoredTheme(): 'light' | 'dark' | null {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return null
  } catch {
    return null
  }
}

function prefersDark(): boolean {
  try {
    return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch {
    return false
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = getStoredTheme()
    if (stored) return stored
    return prefersDark() ? 'dark' : 'light'
  })

  // Sync the root element class immediately so the UI reflects the theme without waiting for effects
  if (typeof document !== 'undefined') {
    const root = document.documentElement
    if (mode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  useEffect(() => {
    try {
      localStorage.setItem('theme', mode)
    } catch (error) {
      console.warn('Failed to persist theme:', error)
    }
  }, [mode])

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        if (typeof document !== 'undefined') {
          const root = document.documentElement
          if (next === 'dark') root.classList.add('dark')
          else root.classList.remove('dark')
        }
        localStorage.setItem('theme', next)
      } catch {}
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
