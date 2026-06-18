import { FormData } from '@/types'
import { InputField } from '@/components'

const EXPENSE_LABELS: { [key: string]: string } = {
  moradia: 'Moradia',
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  saude: 'Saúde',
  educacao: 'Educação',
  outros: 'Outros',
}

interface StepExpensesProps {
  data: FormData
  onChange: (patch: Partial<FormData>) => void
}

export function StepExpenses({ data, onChange }: StepExpensesProps) {
  const handleExpenseChange = (key: string, value: number) => {
    onChange({ despesas: { ...data.despesas, [key]: value } })
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Informe suas despesas fixas mensais (em R$). Se não tiver alguma, deixe 0.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(data.despesas).map(([key, value]) => (
          <InputField
            key={key}
            label={EXPENSE_LABELS[key]}
            type="number"
            value={value || ''}
            onChange={(e) => handleExpenseChange(key, e.target.value ? Number(e.target.value) : 0)}
            placeholder="0"
            min="0"
            step="50"
          />
        ))}
      </div>
    </div>
  )
}
