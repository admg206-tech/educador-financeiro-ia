import { AnalysisResult as AnalysisResultType } from '@/types'
import { Card, Button } from '@/components'

interface AnalysisResultProps {
  result: AnalysisResultType
  onReset: () => void
}

export function AnalysisResult({ result, onReset }: AnalysisResultProps) {
  const scoreColor =
    result.score_financeiro! >= 70
      ? 'text-green-600 dark:text-green-400'
      : result.score_financeiro! >= 40
        ? 'text-yellow-600 dark:text-yellow-400'
        : 'text-red-600 dark:text-red-400'

  return (
    <div className="space-y-6 animate-fade-in">
      {result.score_financeiro && (
        <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/30 dark:border-primary/50">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
              Saúde Financeira
            </p>
            <p className={`text-4xl font-black ${scoreColor}`}>
              {result.score_financeiro}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">/100</p>
          </div>
        </div>
      )}

      {result.alertas && result.alertas.length > 0 && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50">
          <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
            <span>⚠️</span> Alertas Importantes
          </h3>
          <ul className="space-y-1">
            {result.alertas.map((alerta, i) => (
              <li key={i} className="text-sm text-red-800 dark:text-red-300 flex gap-2">
                <span>•</span>
                <span>{alerta}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Card title="Diagnóstico Especializado" emoji="🏥">
        <p className="text-base leading-relaxed">{result.diagnostico}</p>
      </Card>

      <Card title="Recomendações Estratégicas" emoji="💡">
        <ul className="space-y-3">
          {result.recomendacoes.map((rec, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-lg">✓</span>
              <span className="leading-relaxed">{rec}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Próximos Passos Imediatos" emoji="🛠️">
        <ol className="space-y-3">
          {result.proximos_passos.map((passo, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-bold text-primary">{i + 1}.</span>
              <span className="leading-relaxed">{passo}</span>
            </li>
          ))}
        </ol>
      </Card>

      <div className="flex gap-3 justify-center pt-4">
        <Button variant="primary" size="lg" onClick={onReset}>
          Refazer Nova Simulação
        </Button>
      </div>
    </div>
  )
}
