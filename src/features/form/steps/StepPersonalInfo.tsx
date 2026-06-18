import { FormData } from '@/types'
import { InputField } from '@/components'
import { validateStep } from '@/utils/validation'

interface StepPersonalInfoProps {
  data: FormData
  onChange: (patch: Partial<FormData>) => void
}

export function StepPersonalInfo({ data, onChange }: StepPersonalInfoProps) {
  const errors = validateStep(0, data)

  return (
    <div className="space-y-4">
      <InputField
        label="Nome"
        type="text"
        value={data.nome}
        onChange={(e) => onChange({ nome: e.target.value })}
        error={errors.nome}
        placeholder="Digite seu nome completo"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Idade"
          type="number"
          value={data.idade ?? ''}
          onChange={(e) => onChange({ idade: e.target.value ? Number(e.target.value) : null })}
          error={errors.idade}
          placeholder="Ex: 35"
          min="1"
          max="150"
        />

        <InputField
          label="Renda Mensal Líquida (R$)"
          type="number"
          value={data.rendaMensal ?? ''}
          onChange={(e) => onChange({ rendaMensal: e.target.value ? Number(e.target.value) : null })}
          error={errors.rendaMensal}
          placeholder="Ex: 5000"
          min="0"
          step="100"
        />
      </div>
    </div>
  )
}
