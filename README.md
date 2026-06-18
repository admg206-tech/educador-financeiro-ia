# Educador Financeiro IA + Relógio Mundial

🏆 Uma aplicação web inteligente para análise de finanças pessoais com IA Generativa + Relógio Digital com múltiplos fusos horários.

## ✨ Funcionalidades

### 💰 Educador Financeiro
- 📋 Formulário em 4 etapas para coleta de dados financeiros
- 🎨 Tema claro/escuro com persistência
- 🤖 Integração com Google Gemini para análise inteligente
- 💾 Persistência local de simulações
- 📊 Diagnóstico, recomendações e próximos passos
- ♿ Acessibilidade ARIA completa
- 📱 Responsive design (desktop, tablet, mobile)

### ⏰ Relógio Mundial
- 🌍 Visualização de múltiplos fusos horários simultaneamente
- 🕐 Relógios digitais em tempo real (atualização a cada segundo)
- 🌐 12 fusos horários populares pré-configurados
- ➕ Adicionar/remover fusos horários dinamicamente
- 📅 Exibição de data no formato local
- 🔄 Cálculo automático de offsets UTC
- 🎯 Interface intuitiva e responsiva

## 🛠️ Stack Técnico

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite
- **Estilos**: Tailwind CSS
- **IA**: Google Generative AI (Gemini)
- **APIs**: Intl (Internacionalização)
- **Persistência**: localStorage

## 📦 Instalação

### Pré-requisitos
- Node.js 16+
- npm ou yarn
- Chave de API do Google Gemini (para o Educador Financeiro)

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/admg206-tech/educador-financeiro-ia.git
cd educador-financeiro-ia

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente (opcional)
cp .env.example .env.local
# Adicione sua chave VITE_GEMINI_API_KEY

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse a aplicação
# http://localhost:5173
```

## 🎯 Como Usar

### Educador Financeiro
1. Cole sua chave de API do Google Gemini
2. Preencha o formulário com seus dados financeiros
3. Revise o resumo
4. Clique em "Analisar com IA"
5. Receba diagnóstico personalizado

### Relógio Mundial
1. Clique na aba "⏰ Relógio Mundial"
2. Visualize os fusos horários padrão
3. Use o seletor para adicionar novos fusos
4. Clique no ✕ para remover fusos
5. Veja as atualizações em tempo real

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── DigitalClock.tsx          ⭐ NEW
│   ├── Header.tsx
│   ├── InputField.tsx
│   ├── ProgressBar.tsx
│   ├── SelectField.tsx
│   ├── ThemeToggle.tsx
│   ├── TimeZoneGrid.tsx          ⭐ NEW
│   ├── TimeZoneSelector.tsx      ⭐ NEW
│   ├── WorldClockWidget.tsx      ⭐ NEW
│   └── index.ts
├── contexts/
│   └── ThemeContext.tsx
├── features/
│   ├── api/
│   └── form/
├── hooks/
│   ├── useAnalysisHistory.ts
│   ├── useFormData.ts
│   ├── useGeminiAnalysis.ts
│   ├── useMultipleTimeZones.ts   ⭐ NEW
│   └── index.ts
├── pages/
│   └── ClockPage.tsx             ⭐ NEW
├── types/
├── utils/
├── App.tsx
├── main.tsx
└── index.css
```

## 🕐 Fusos Horários Suportados

| Timezone | Label | Offset |
|----------|-------|--------|
| UTC | UTC (Coordenada Universal) | ±00:00 |
| America/Sao_Paulo | São Paulo (BRT) | -03:00 |
| America/New_York | Nova York (EST/EDT) | -05:00 / -04:00 |
| Europe/London | Londres (GMT/BST) | ±00:00 / +01:00 |
| Europe/Paris | Paris (CET/CEST) | +01:00 / +02:00 |
| Asia/Tokyo | Tóquio (JST) | +09:00 |
| Asia/Hong_Kong | Hong Kong (HKT) | +08:00 |
| Australia/Sydney | Sydney (AEDT/AEST) | +10:00 / +11:00 |
| Asia/Dubai | Dubai (GST) | +04:00 |
| Asia/Singapore | Singapura (SGT) | +08:00 |
| America/Los_Angeles | Los Angeles (PST/PDT) | -08:00 / -07:00 |
| Asia/Kolkata | Índia (IST) | +05:30 |

## 📝 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build produção
npm run preview      # Preview do build
npm run type-check   # Validar tipos TypeScript
npm run lint         # Linter
npm run format       # Formatar código
```

## 🎨 Personalização

### Adicionar mais fusos horários

Edite `src/hooks/useMultipleTimeZones.ts`:

```typescript
const COMMON_TIMEZONES = [
  // ... fusos existentes
  { timezone: 'America/Mexico_City', label: 'Cidade do México (CST/CDT)' },
]
```

### Mudar cor principal

Edite `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#6d28d9', // Mude esta cor
  },
}
```

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Deploy a pasta dist/
```

### Netlify
```bash
npm run build
# Arraste a pasta dist/ para Netlify
```

## 🔧 Recursos Futuros

- [ ] Comparação de fusos horários
- [ ] Conversor de hora entre fusos
- [ ] Alertas de reunião em múltiplos fusos
- [ ] Exportar relógio como imagem
- [ ] Sincronização em tempo real com servidor
- [ ] Gráficos de análise financeira
- [ ] Relatórios em PDF
- [ ] Progressive Web App (PWA)

## 📄 Licença

MIT © 2024 admg206-tech

## 💬 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/admg206-tech/educador-financeiro-ia/issues).

## 📚 Aprenda Mais

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Generative AI](https://ai.google.dev)
- [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
