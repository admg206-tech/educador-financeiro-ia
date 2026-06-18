import { FormData, ValidationError } from '@/types'

export function validateStep(
  stepIndex: number,
  formData: FormData,
): ValidationError {
  const errors: ValidationError = {}

  if (stepIndex === 0) {
    // Validação: Dados Pessoais
    if (!formData.nome || formData.nome.trim().length < 2) {
      errors.nome = 'Informe um nome válido (mínimo 2 caracteres)'
    }
    if (!formData.idade || formData.idade <= 0 || formData.idade > 150) {
      errors.idade = 'Informe uma idade válida (1-150)'
    }
    if (!formData.rendaMensal || formData.rendaMensal <= 0) {
      errors.rendaMensal = 'Informe uma renda válida (maior que 0)'
    }
  } else if (stepIndex === 2) {
    // Validação: Objetivo Financeiro
    if (!formData.objetivo) {
      errors.objetivo = 'Selecione um objetivo financeiro'
    }
    if (
      formData.valorObjetivoMensal === null ||
      formData.valorObjetivoMensal < 0
    ) {
      errors.valorObjetivoMensal = 'Informe um valor válido (≥ 0)'
    }
  }

  return errors
}

export function calculateSaldo(
  rendaMensal: number | null,
  despesas: { [key: string]: number },
): number {
  const totalDespesas = Object.values(despesas).reduce((sum, val) => sum + (val ?? 0), 0)
  return (rendaMensal ?? 0) - totalDespesas
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
