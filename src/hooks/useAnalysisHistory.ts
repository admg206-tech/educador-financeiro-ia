import { useState, useEffect } from 'react'
import { SimulationHistory } from '@/types'

const STORAGE_KEY = 'analysisHistory'

export function useAnalysisHistory() {
  const [history, setHistory] = useState<SimulationHistory[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
    } catch (error) {
      console.warn('Failed to persist history:', error)
    }
  }, [history])

  const addToHistory = (item: Omit<SimulationHistory, 'id' | 'timestamp'>) => {
    const newItem: SimulationHistory = {
      ...item,
      id: `sim_${Date.now()}`,
      timestamp: Date.now(),
    }
    setHistory((prev) => [newItem, ...prev].slice(0, 50)) // Keep last 50
  }

  const clearHistory = () => {
    setHistory([])
  }

  const removeFromHistory = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id))
  }

  return {
    history,
    addToHistory,
    clearHistory,
    removeFromHistory,
  }
}
