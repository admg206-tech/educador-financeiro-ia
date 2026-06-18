import { useState, useEffect } from 'react'
import { FormData } from '@/types'

const STORAGE_KEY = 'simulationData'

const initialFormData: FormData = {
  nome: '',
  idade: null,
  rendaMensal: null,
  despesas: {
    moradia: 0,
    alimentacao: 0,
    transporte: 0,
    saude: 0,
    educacao: 0,
    outros: 0,
  },
  objetivo: '',
  valorObjetivoMensal: null,
}

export function useFormData() {
  const [formData, setFormData] = useState<FormData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : initialFormData
    } catch {
      return initialFormData
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    } catch (error) {
      console.warn('Failed to persist form data:', error)
    }
  }, [formData])

  const updateFormData = (patch: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...patch }))
  }

  const resetFormData = () => {
    setFormData(initialFormData)
  }

  return {
    formData,
    updateFormData,
    resetFormData,
  }
}
