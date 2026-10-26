# Atividade React.js: Loja React

**Aluna:** Ana Júlia Gusmão do Nascimento
**Disciplina:** Tópicos Avançados de Programação · Engenharia de Software · UCSal  
**Professor:** Elton Figueiredo da Silva

Aplicação web responsiva feita com React.js e Vite, com tema claro/escuro e três idiomas (português, inglês e espanhol).

## Componentes obrigatórios

| Componente | Arquivo | Conceitos |
|---|---|---|
| Acordeão | `src/components/Accordion.jsx` | props, `useState`, ARIA |
| Paginação | `src/components/Pagination.jsx` | props, callback, botões desabilitados |
| Barra de Progresso | `src/components/ProgressBar.jsx` | props (0-100), `role="progressbar"` |
| Abas | `src/components/Tabs.jsx` | `useState`, `role="tablist"` |
| Menu Suspenso | `src/components/Dropdown.jsx` | `useState`, `useEffect`, `useRef` |
| Notificação Toast | `src/components/Toast.jsx` | `useEffect`, timer, tipos |

## Desafio extra (Context API)

Quatro contextos globais em `src/context/`:

- `ThemeContext`: tema claro/escuro
- `LanguageContext`: idioma (PT / EN / ES)
- `ToastContext`: notificações disparadas de qualquer componente
- `CartContext`: carrinho de compras

## Como executar

```bash
npm install
npm run dev
```

## Demonstração online

(https://anajugn.github.io/atividade-react/)