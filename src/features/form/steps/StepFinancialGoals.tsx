import { FormData } from '@/types'
import { InputField, SelectField } from '@/components'
import { validateStep } from '@/utils/validation'

const GOALS = [
  { value: '', label: 'Selecione um objetivo' },
  { value: 'reserva', label: 'Reserva de emergência' },
  { value: 'investimento', label: 'Investimento' },
  { value: 'quitar_dividas', label: 'Quitar dívidas' },
  { value: 'educacao', label: 'Educação/Cursos' },
  { value: 'patrimonio', label: 'Construir patrimônio' },
  { value: 'outro', label: 'Outro' },
]

interface StepFinancialGoalsProps {
  data: FormData
  onChange: (patch: Partial<FormData>) => void
}

export function StepFinancialGoals({ data, onChange }: StepFinancialGoalsProps) {
  const errors = validateStep(2, data)

  return (
    <div className="space-y-4">
      <SelectField
        label="Objetivo Financeiro Principal"
        value={data.objetivo}
        onChange={(e) => onChange({ objetivo: e.target.value })}
        options={GOALS}
        error={errors.objetivo}
      />

      <InputField
        label="Valor Mensal Disponível para Investir (R$)"
        type="number"
        value={data.valorObjetivoMensal ?? ''}
        onChange={(e) => onChange({ valorObjetivoMensal: e.target.value ? Number(e.target.value) : null })}
        error={errors.valorObjetivoMensal}
        placeholder="Ex: 500"
        min="0"
        step="50"
        hint="Quanto você consegue guardar mensalmente para seu objetivo?"
      />
    </div>
  )
}
