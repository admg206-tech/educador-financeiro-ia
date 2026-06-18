import { useState } from 'react'
import { useMultipleTimeZones } from '@/hooks'
import { TimeZoneGrid, TimeZoneSelector, Card } from '@/components'

const DEFAULT_TIMEZONES = ['America/Sao_Paulo', 'UTC', 'Europe/London', 'Asia/Tokyo']

export function ClockPage() {
  const [selectedTimezones, setSelectedTimezones] = useState<string[]>(
    DEFAULT_TIMEZONES,
  )
  const [newTimezone, setNewTimezone] = useState('')

  const { times, allTimezones } = useMultipleTimeZones(selectedTimezones)

  const handleAddTimezone = () => {
    if (newTimezone && !selectedTimezones.includes(newTimezone)) {
      setSelectedTimezones([...selectedTimezones, newTimezone])
      setNewTimezone('')
    }
  }

  const handleRemoveTimezone = (timezone: string) => {
    setSelectedTimezones(
      selectedTimezones.filter((tz) => tz !== timezone),
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            ⏰ Relógio Mundial
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Visualize a hora em diferentes fusos horários do mundo
          </p>
        </div>

        {/* Add Timezone Section */}
        <Card title="Adicionar Fuso Horário" emoji="🌐">
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex-1">
              <TimeZoneSelector
                label="Fuso Horário"
                value={newTimezone}
                onChange={setNewTimezone}
                options={allTimezones.filter(
                  (tz) => !selectedTimezones.includes(tz.timezone),
                )}
                placeholder="Selecione um fuso horário"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleAddTimezone}
                disabled={!newTimezone}
                className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark disabled:opacity-50 transition-all shadow-md"
              >
                Adicionar
              </button>
            </div>
          </div>
        </Card>

        {/* Clock Grid */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Horários Atuais
          </h2>
          <TimeZoneGrid
            times={times}
            onRemoveTimezone={handleRemoveTimezone}
            canRemove={selectedTimezones.length > 1}
          />
        </div>

        {/* Info Card */}
        <Card title="Informações sobre Fusos Horários" emoji="ℹ️">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Fusos Horários:</strong> São divisões da Terra baseadas na
              rotação do planeta. Cada fuso tem 15 graus de longitude.
            </p>
            <p>
              <strong>UTC:</strong> Tempo Universal Coordenado, o padrão
              internacional para medir tempo.
            </p>
            <p>
              <strong>Offset:</strong> Diferença em horas e minutos em relação ao
              UTC (Coordenada Universal).
            </p>
            <p>
              <strong>Horário de Verão:</strong> Alguns fusos ajustam a hora
              durante períodos específicos do ano.
            </p>
          </div>
        </Card>

        {/* Selected Timezones Info */}
        <Card title="Fusos Horários Selecionados" emoji="📍">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedTimezones.map((tz) => {
              const tzData = allTimezones.find((t) => t.timezone === tz)
              return (
                <div
                  key={tz}
                  className="p-3 rounded-md bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
                >
                  <div className="font-semibold text-slate-800 dark:text-white">
                    {tz}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {tzData?.label}
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}
