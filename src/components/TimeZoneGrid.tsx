import React from 'react'
import { DigitalClock } from './DigitalClock'
import { Button } from './Button'

interface TimeData {
  timezone: string
  label: string
  time: string
  date: string
  offset: string
}

interface TimeZoneGridProps {
  times: TimeData[]
  onAddTimezone?: () => void
  onRemoveTimezone?: (timezone: string) => void
  canRemove?: boolean
}

export function TimeZoneGrid({
  times,
  onAddTimezone,
  onRemoveTimezone,
  canRemove = false,
}: TimeZoneGridProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {times.map((timeData, index) => (
          <div key={`${timeData.timezone}-${index}`} className="relative">
            <DigitalClock
              time={timeData.time}
              timezone={timeData.timezone}
              label={timeData.label}
              date={timeData.date}
              offset={timeData.offset}
              isActive={index === 0}
            />
            {canRemove && times.length > 1 && (
              <button
                onClick={() => onRemoveTimezone?.(timeData.timezone)}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-danger text-white text-sm font-bold hover:bg-danger-dark transition-all"
                title="Remover fuso horário"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      {onAddTimezone && (
        <div className="flex justify-center pt-2">
          <Button variant="secondary" onClick={onAddTimezone}>
            ➕ Adicionar Fuso Horário
          </Button>
        </div>
      )}
    </div>
  )
}
