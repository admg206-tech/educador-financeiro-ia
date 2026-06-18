import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { FormData, AnalysisResult } from '@/types'

const SYSTEM_PROMPT = `
Você é um educador financeiro experiente e empático. Receberá um JSON com dados do usuário.
Responda EXATAMENTE com um JSON válido e nada mais, com a estrutura:
{
  "diagnostico": "string com diagnóstico geral da saúde financeira (2-3 linhas)",
  "recomendacoes": ["array de 4-5 strings com dicas práticas e acionáveis"],
  "proximos_passos": ["array de 3-4 strings com ações imediatas sugeridas"],
  "score_financeiro": number entre 0 e 100,
  "alertas": ["array de strings com alertas sobre situações financeiras críticas, se houver"]
}

Seja objetivo, empático e forneça insights baseados nos valores informados.
Considere a proporção entre despesas e renda, o objetivo financeiro e disponibilidade mensal.
`

export function useGeminiAnalysis() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const analyze = async (
    data: FormData,
    apiKey: string,
  ): Promise<AnalysisResult> => {
    if (!apiKey) {
      throw new Error('Chave de API Gemini não configurada')
    }

    setLoading(true)
    setError(null)

    try {
      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        generationConfig: { responseMimeType: 'application/json' },
      })

      const prompt = `${SYSTEM_PROMPT}\n\nDados do usuário:\n${JSON.stringify(data, null, 2)}`

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      // Extrai JSON da resposta
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (!jsonMatch) {
        throw new Error('Resposta da IA não contém JSON válido')
      }

      const parsed = JSON.parse(jsonMatch[0]) as AnalysisResult
      return parsed
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Erro desconhecido ao analisar finanças'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    analyze,
    loading,
    error,
  }
}
