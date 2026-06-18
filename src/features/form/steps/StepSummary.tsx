import { FormData } from '@/types'
import { Card } from '@/components'
import { formatCurrency, calculateSaldo } from '@/utils/validation'

const EXPENSE_LABELS: { [key: string]: string } = {
  moradia: 'Moradia',
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  saude: 'Saúde',
  educacao: 'Educação',
  outros: 'Outros',
}

interface StepSummaryProps {
  data: FormData
  onEdit: (stepIndex: number) => void
}

export function StepSummary({ data, onEdit }: StepSummaryProps) {
  const totalDespesas = Object.values(data.despesas).reduce((s, v) => s + (v ?? 0), 0)
  const saldo = calculateSaldo(data.rendaMensal, data.despesas)
  const percentualDespesa = data.rendaMensal
    ? Math.round((totalDespesas / data.rendaMensal) * 100)
    : 0

  return (
    <Card title="Resumo da Simulação" emoji="📊">
      <div className="space-y-4 text-slate-900 dark:text-white">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Nome</p>
            <p className="font-semibold text-base">{data.nome}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Idade</p>
            <p className="font-semibold text-base">{data.idade ?? '-'} anos</p>
          </div>
        </div>

        <div className="p-3 rounded-md bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50">
          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">Renda Mensal</p>
          <p className="text-lg font-bold text-blue-700 dark:text-blue-300">
            {formatCurrency(data.rendaMensal ?? 0)}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Despesas Discriminadas:</h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(data.despesas).map(([k, v]) => (
              <div
                key={k}
                className="p-2 rounded bg-gray-100 dark:bg-slate-700/50 text-xs"
              >
                <span className="font-medium">{EXPENSE_LABELS[k]}</span>
                <p className="text-slate-600 dark:text-slate-400">{formatCurrency(v)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t dark:border-slate-700 pt-3 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Total de Despesas:</span>
            <span className="font-bold text-red-600 dark:text-red-400">
              {formatCurrency(totalDespesas)} ({percentualDespesa}%)
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Saldo Disponível:</span>
            <span
              className={`font-bold ${
                saldo >= 0
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {formatCurrency(saldo)}
            </span>
          </div>
        </div>

        <div className="p-3 rounded-md bg-primary/10 dark:bg-primary/20 border border-primary/30">
          <p className="text-xs text-primary-dark dark:text-primary-light font-medium mb-1">
            Foco Estratégico
          </p>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {data.objetivo || 'Não definido'}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Alocação: {formatCurrency(data.valorObjetivoMensal ?? 0)}/mês
          </p>
        </div>
      </div>
    </Card>
  )
}
