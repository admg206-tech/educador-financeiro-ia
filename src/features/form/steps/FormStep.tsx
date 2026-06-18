import { FormData } from '@/types'
import { StepPersonalInfo } from './StepPersonalInfo'
import { StepExpenses } from './StepExpenses'
import { StepFinancialGoals } from './StepFinancialGoals'
import { StepSummary } from './StepSummary'

interface FormStepProps {
  stepIndex: number
  formData: FormData
  onChange: (patch: Partial<FormData>) => void
}

export function FormStep({ stepIndex, formData, onChange }: FormStepProps) {
  switch (stepIndex) {
    case 0:
      return <StepPersonalInfo data={formData} onChange={onChange} />
    case 1:
      return <StepExpenses data={formData} onChange={onChange} />
    case 2:
      return <StepFinancialGoals data={formData} onChange={onChange} />
    case 3:
      return <StepSummary data={formData} onEdit={(step) => {}} />
    default:
      return null
  }
}
