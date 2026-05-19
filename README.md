# RunWise — Gerenciamento Empresarial Inteligente

> **Ideias que Inspiram, Soluções que Transformam**

Plataforma full-stack com IA para gestão financeira e estratégica de Pequenas e Médias Empresas (PMEs).

Colégio Estadual Professora Reni Correia Gamper | Manoel Ribas/PR – 2026  
Curso Técnico em Desenvolvimento de Sistemas

---

## 1. Identificação do Projeto

| Campo | Informação |
|---|---|
| Instituição | Colégio Estadual Professora Reni Correia Gamper (INEP: 41039157) |
| Curso | Técnico em Desenvolvimento de Sistemas |
| Competição | Desafio EPT PR 2026 |
| Professor Orientador | [Nome do orientador] |
| Equipe | Nicolas, G-Dreake, Bigode, PLK |

---

## 2. Introdução

### 2.1 Problema

80% das PMEs fecham em até 5 anos por falhas na gestão financeira. Os principais desafios:

| Desafio | Impacto |
|---|---|
| Controle manual via planilhas | Erros humanos (15–20%) |
| Ausência de análises preditivas | Perda de oportunidades |
| Decisões baseadas em intuição | Redução de competitividade |
| Relatórios demorados | Perda de produtividade |

### 2.2 Solução

O RunWise é um assistente digital com IA que oferece:

- Dashboard executivo responsivo (web + mobile)
- Análise automatizada de fluxo de caixa
- Previsões com algoritmos de IA
- APIs RESTful escaláveis
- Acesso via site e aplicativo mobile

### 2.3 Objetivos

**Geral:** Desenvolver uma plataforma completa para otimizar a gestão financeira de PMEs com auxílio de inteligência artificial.

**Específicos:**
- Interface web responsiva e aplicativo mobile
- Backend com APIs financeiras REST
- Visualizações analíticas interativas
- Algoritmos preditivos de fluxo de caixa

---

## 3. Arquitetura do Sistema

```
RunWise/
├── Site/              # Frontend Web (React)
│   ├── src/
│   │   ├── pages/     # Home, Login, Dashboard, Sobre, Contato
│   │   ├── components/# Navbar, Card, Gráficos
│   │   └── styles/    # CSS global e variáveis
│   └── package.json
│
├── Aplicativo/        # App Mobile (React Native + Expo)
│   ├── src/
│   │   ├── screens/   # LoginScreen, HomeScreen, DashboardScreen
│   │   ├── navigation/# Rotas do app
│   │   └── services/  # Comunicação com a API
│   └── package.json
│
└── API/               # Backend (Node.js + Express)
    ├── src/
    │   ├── routes/    # auth.js, dashboard.js
    │   ├── controllers/
    │   ├── middleware/ # Autenticação JWT
    │   └── models/    # Usuários e dados
    └── package.json
```

### Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Frontend Web | React, React Router, Axios |
| Mobile | React Native, Expo |
| Backend | Node.js, Express.js |
| Autenticação | JWT (JSON Web Token) |
| Estilização | CSS3, Poppins, Font Awesome 6 |
| Versionamento | Git + GitHub |
| Ferramentas | VS Code, Postman |

---

## 4. Funcionalidades

- ✅ Autenticação com JWT (login e cadastro)
- ✅ Dashboard financeiro com métricas
- ✅ Gráficos interativos de vendas e despesas
- ✅ Design responsivo (mobile-first)
- ✅ API REST documentada
- 🔄 Previsão de fluxo de caixa com IA
- 🔄 Export de relatórios (PDF/Excel)
- 🔄 App mobile publicado

---

## 5. Como Rodar

### Pré-requisitos
- Node.js v18+
- npm ou yarn
- Expo CLI (para o app)

### Backend (API)
```bash
cd API
npm install
# Crie o arquivo .env com PORT e JWT_SECRET
npm run dev
```

### Site
```bash
cd Site
npm install
npm start
```

### Aplicativo
```bash
cd Aplicativo
npm install
npx expo start
```

---

## 6. Convenções de Commit

```
feat:   nova funcionalidade
fix:    correção de bug
style:  mudança visual sem lógica
update: atualização de conteúdo
docs:   documentação
```

---

## 7. Equipe

| Membro | GitHub |
|---|---|
| Nicolas | [@nicolassilveriojr](https://github.com/nicolassilveriojr) |
| G-Dreake | — |
| Bigode | — |
| PLK | [@plklindao](https://github.com/plklindao) |

---

## 8. Alinhamento com o Desafio EPT PR 2026

| Critério | Descrição |
|---|---|
| Tema | Ideias que Inspiram, Soluções que Transformam |
| Problema real | PMEs sem ferramentas acessíveis de gestão com IA |
| Solução técnica | Plataforma Full-Stack Web + Mobile + API |
| Impacto social | Aumento da competitividade de pequenos negócios locais |

---

*Colégio Estadual Professora Reni Correia Gamper — Manoel Ribas/PR, 2026*
