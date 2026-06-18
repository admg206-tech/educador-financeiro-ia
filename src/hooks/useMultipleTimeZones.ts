import { useState, useEffect } from 'react'

interface TimeData {
  timezone: string
  label: string
  time: string
  date: string
  offset: string
}

const COMMON_TIMEZONES = [
  { timezone: 'UTC', label: 'UTC (Coordenada Universal)' },
  { timezone: 'America/Sao_Paulo', label: 'São Paulo (BRT)' },
  { timezone: 'America/New_York', label: 'Nova York (EST/EDT)' },
  { timezone: 'Europe/London', label: 'Londres (GMT/BST)' },
  { timezone: 'Europe/Paris', label: 'Paris (CET/CEST)' },
  { timezone: 'Asia/Tokyo', label: 'Tóquio (JST)' },
  { timezone: 'Asia/Hong_Kong', label: 'Hong Kong (HKT)' },
  { timezone: 'Australia/Sydney', label: 'Sydney (AEDT/AEST)' },
  { timezone: 'Asia/Dubai', label: 'Dubai (GST)' },
  { timezone: 'Asia/Singapore', label: 'Singapura (SGT)' },
  { timezone: 'America/Los_Angeles', label: 'Los Angeles (PST/PDT)' },
  { timezone: 'Asia/Kolkata', label: 'Índia (IST)' },
]

export function useMultipleTimeZones(selectedTimezones: string[] = ['America/Sao_Paulo', 'UTC', 'Europe/London', 'Asia/Tokyo']) {
  const [times, setTimes] = useState<TimeData[]>([])

  useEffect(() => {
    const updateTimes = () => {
      const updatedTimes = selectedTimezones.map((tz) => {
        const tzData = COMMON_TIMEZONES.find((t) => t.timezone === tz)
        const formatter = new Intl.DateTimeFormat('pt-BR', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
        
        const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
          timeZone: tz,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })

        // Calcular offset
        const now = new Date()
        const utc = now.getTime() + now.getTimezoneOffset() * 60000
        const tzDate = new Date(utc + 3600000 * getOffsetHours(tz))
        const offset = getOffsetString(tz)

        return {
          timezone: tz,
          label: tzData?.label || tz,
          time: formatter.format(new Date()),
          date: dateFormatter.format(new Date()),
          offset: offset,
        }
      })
      setTimes(updatedTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [selectedTimezones])

  return { times, allTimezones: COMMON_TIMEZONES }
}

function getOffsetHours(timezone: string): number {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    hour12: false,
  })
  const date = new Date()
  const tzTime = parseInt(formatter.format(date))
  const utcTime = date.getUTCHours()
  return tzTime - utcTime
}

function getOffsetString(timezone: string): string {
  const offset = getOffsetHours(timezone)
  const hours = Math.floor(Math.abs(offset))
  const minutes = (Math.abs(offset) % 1) * 60
  const sign = offset >= 0 ? '+' : '-'
  return `UTC ${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}
