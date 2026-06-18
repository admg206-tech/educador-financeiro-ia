import { useState } from 'react'
import { useFormData, useGeminiAnalysis, useAnalysisHistory } from '@/hooks'
import { validateStep } from '@/utils/validation'
import { ProgressBar, Button } from '@/components'
import { FormStep } from './steps/FormStep'
import { AnalysisResult as AnalysisResultComponent } from './AnalysisResult'
import { AnalysisResult } from '@/types'

const STEPS = ['Pessoal', 'Despesas', 'Objetivo', 'Resumo']

interface MultiStepFormProps {
  apiKey: string
}

export function MultiStepForm({ apiKey }: MultiStepFormProps) {
  const { formData, updateFormData, resetFormData } = useFormData()
  const { analyze, loading: analyzing, error: analysisError } = useGeminiAnalysis()
  const { addToHistory } = useAnalysisHistory()

  const [current, setCurrent] = useState(0)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleNext = () => {
    if (validateStep(current, formData)) {
      setCurrent((prev) => Math.min(prev + 1, STEPS.length - 1))
    }
  }

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async () => {
    if (!apiKey) {
      setErrors({ api: 'Configure sua chave de API do Gemini para continuar.' })
      return
    }

    try {
      const analysisResult = await analyze(formData, apiKey)
      setResult(analysisResult)
      addToHistory({ data: formData, resultado: analysisResult })
    } catch (err) {
      setErrors({ api: analysisError || 'Erro ao processar análise' })
    }
  }

  const handleReset = () => {
    resetFormData()
    setResult(null)
    setCurrent(0)
    setErrors({})
  }

  if (result) {
    return <AnalysisResultComponent result={result} onReset={handleReset} />
  }

  return (
    <div className="space-y-6">
      <ProgressBar current={current} total={STEPS.length} label={`Etapa: ${STEPS[current]}`} />

      <div className="p-5 rounded-lg bg-gray-50 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700/50 min-h-[300px]">
        <FormStep stepIndex={current} formData={formData} onChange={updateFormData} />
      </div>

      <div className="flex justify-between items-center gap-3">
        <Button variant="secondary" onClick={handlePrev} disabled={current === 0}>
          Anterior
        </Button>

        {current < STEPS.length - 1 ? (
          <Button variant="primary" onClick={handleNext}>
            Próximo
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="success"
              onClick={handleSubmit}
              loading={analyzing}
              disabled={!apiKey}
            >
              Analisar com IA
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              Limpar
            </Button>
          </div>
        )}
      </div>

      {errors.api && (
        <div className="p-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50">
          <p className="text-sm text-red-700 dark:text-red-400 font-medium">{errors.api}</p>
        </div>
      )}
    </div>
  )
}
