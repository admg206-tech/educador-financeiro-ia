import { InputField } from '@/components'

interface ApiKeyInputProps {
  value: string
  onChange: (value: string) => void
}

export function ApiKeyInput({ value, onChange }: ApiKeyInputProps) {
  return (
    <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-yellow-950/20 border border-amber-200 dark:border-yellow-900/50">
      <InputField
        label="Chave API do Google Gemini"
        type="password"
        placeholder="Cole sua VITE_GEMINI_API_KEY aqui"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        hint="A chave fica salva com segurança apenas no seu localStorage do navegador."
      />
    </div>
  )
}
