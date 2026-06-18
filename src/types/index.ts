/**
 * Tipos e interfaces para a aplicação Educador Financeiro
 */

export interface FormData {
  nome: string
  idade: number | null
  rendaMensal: number | null
  despesas: Despesas
  objetivo: string
  valorObjetivoMensal: number | null
}

export interface Despesas {
  moradia: number
  alimentacao: number
  transporte: number
  saude: number
  educacao: number
  outros: number
}

export interface AnalysisResult {
  diagnostico: string
  recomendacoes: string[]
  proximos_passos: string[]
  score_financeiro?: number
  alertas?: string[]
}

export interface SimulationHistory {
  id: string
  data: FormData
  resultado: AnalysisResult
  timestamp: number
}

export interface ValidationError {
  [key: string]: string
}

export interface Theme {
  mode: 'light' | 'dark'
  toggleTheme: () => void
}
