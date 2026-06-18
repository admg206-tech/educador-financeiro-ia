import React from 'react'
import { SelectField } from './SelectField'

interface TimeZoneSelector {
  label?: string
  value: string
  onChange: (value: string) => void
  options: Array<{ timezone: string; label: string }>
  placeholder?: string
}

export function TimeZoneSelector({
  label = 'Selecionar Fuso Horário',
  value,
  onChange,
  options,
  placeholder = 'Escolha um fuso horário',
}: TimeZoneSelector) {
  return (
    <SelectField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={[
        { value: '', label: placeholder },
        ...options.map((opt) => ({ value: opt.timezone, label: opt.label })),
      ]}
    />
  )
}
