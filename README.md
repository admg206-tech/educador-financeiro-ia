# Educador Financeiro IA

🏆 Uma aplicação web inteligente para análise de finanças pessoais com IA Generativa.

## 🎯 Sobre o Projeto

O **Educador Financeiro** é um simulador assistido que mapeia o ecossistema financeiro pessoal do usuário e gera diagnósticos personalizados com recomendações estratégicas usando o Google Gemini.

## ✨ Funcionalidades

- 📋 **Formulário em Etapas**: Coleta dados pessoais, despesas, e objetivos financeiros
- 🎨 **Tema Claro/Escuro**: Interface adaptável com persistência de preferência
- 🤖 **Integração com Google Gemini**: Análise inteligente de dados financeiros
- 💾 **Persistência Local**: Dados salvos automaticamente no localStorage
- 📊 **Análise Personalizada**: Diagnóstico, recomendações e próximos passos
- ♿ **Acessibilidade**: Suporte ARIA e navegação por teclado
- 📱 **Responsive Design**: Funciona em desktop, tablet e mobile

## 🛠️ Stack Técnico

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite
- **Estilos**: Tailwind CSS
- **IA**: Google Generative AI (Gemini)
- **Persistência**: localStorage

## 📦 Instalação

### Pré-requisitos

- Node.js 16+
- npm ou yarn
- Chave de API do Google Gemini ([obter aqui](https://makersuite.google.com/app/apikey))

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/admg206-tech/educador-financeiro-ia.git
   cd educador-financeiro-ia
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a variável de ambiente**
   ```bash
   cp .env.example .env.local
   # Edite .env.local e adicione sua chave de API Gemini
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**
   - Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 🎯 Como Usar

1. Cole sua chave de API do Google Gemini no campo de configuração
2. Preencha o formulário com seus dados financeiros:
   - **Etapa 1**: Informações pessoais (nome, idade, renda)
   - **Etapa 2**: Despesas fixas mensais
   - **Etapa 3**: Objetivo financeiro e valor disponível
   - **Etapa 4**: Revisão do resumo
3. Clique em "Analisar com IA" para gerar análise personalizada
4. Revise o diagnóstico, recomendações e próximos passos

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── InputField.tsx
│   ├── ProgressBar.tsx
│   ├── SelectField.tsx
│   ├── ThemeToggle.tsx
│   └── index.ts
├── contexts/            # Context API
│   └── ThemeContext.tsx
├── features/            # Funcionalidades principais
│   ├── api/
│   │   └── ApiKeyInput.tsx
│   └── form/
│       ├── AnalysisResult.tsx
│       ├── MultiStepForm.tsx
│       └── steps/
│           ├── FormStep.tsx
│           ├── StepExpenses.tsx
│           ├── StepFinancialGoals.tsx
│           ├── StepPersonalInfo.tsx
│           └── StepSummary.tsx
├── hooks/               # Custom hooks
│   ├── useAnalysisHistory.ts
│   ├── useFormData.ts
│   ├── useGeminiAnalysis.ts
│   └── index.ts
├── types/               # Tipos TypeScript
│   └── index.ts
├── utils/               # Funções utilitárias
│   ├── storage.ts
│   └── validation.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🔑 Variáveis de Ambiente

```env
VITE_GEMINI_API_KEY=sua_chave_api_aqui
VITE_APP_NAME=Educador Financeiro IA
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Validar tipos TypeScript
npm run type-check

# Linter
npm run lint

# Formatar código
npm run format
```

## ✅ Validações

- Nome: Mínimo 2 caracteres
- Idade: Entre 1 e 150 anos
- Renda: Maior que 0
- Objetivo: Obrigatório
- Valor de investimento: Não negativo

## 🚀 Deploy

### Vercel

1. Push seu código para o GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. Configure a variável de ambiente `VITE_GEMINI_API_KEY`
4. Deploy automático em cada push

### GitHub Pages

```bash
npm run build
# Faça deploy da pasta dist/ para GitHub Pages
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

MIT © 2024 admg206-tech

## 📞 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/admg206-tech/educador-financeiro-ia/issues).

## 📚 Aprenda Mais

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Generative AI](https://ai.google.dev)
