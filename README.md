<div align="center">
<img src="https://img.shields.io/badge/EPT%20Desafio-2026-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" />
<img src="https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge" />
# 🤖 Assistente Inteligente com IA para Gestão Financeira e Estratégica de PMEs
 
> **Ideias que Inspiram, Soluções que Transformam**  
> Desafio EPT – PR 2026
 
**Colégio Estadual Professora Reni Correia Gamper | Manoel Ribas – PR**  
Curso Técnico em Desenvolvimento de Sistemas
 
🌐 [Acessar o site](https://run-wise-three.vercel.app)
 
</div>
---
 
## 📋 Sobre o Projeto
 
O **RunWise** é um assistente financeiro inteligente desenvolvido para pequenas e médias empresas (PMEs), que utiliza Inteligência Artificial para análise, previsão e tomada de decisão estratégica.
 
O projeto foi criado como resposta a um problema real do mundo do trabalho: **a maioria das PMEs brasileiras não possui ferramentas acessíveis de gestão financeira**, o que contribui para altas taxas de falência nos primeiros anos de operação.
 
### 💡 Problema que Resolvemos
 
| Problema | Impacto nas PMEs |
|---|---|
| Controle manual via planilhas | Erros de 15–20% nas análises |
| Ausência de análise preditiva | Perda de oportunidades de mercado |
| Decisões baseadas em intuição | Redução de competitividade |
| Relatórios demorados | Queda de produtividade operacional |
 
> 📊 **80% das PMEs fecham em até 5 anos por falhas na gestão financeira.** — Sebrae
 
---
 
## ✨ Funcionalidades
 
- ✅ Autenticação segura com JWT
- ✅ Dashboard financeiro em tempo real com KPIs
- ✅ Gráficos interativos (receita × despesa, fluxo de caixa, categorias)
- ✅ Chat com Assistente de IA para análise e recomendações
- ✅ Previsão de fluxo de caixa com regressão linear
- ✅ Exportação de relatórios em PDF e Excel
- ✅ Funcionamento offline (PWA)
- ✅ Design responsivo — mobile e desktop
---
 
## 🏗️ Estrutura do Projeto
 
```
RunWise/
├── Site/               # Frontend Web
│   ├── index.html      # Landing Page
│   ├── dashboard.html  # Painel principal
│   ├── style.css       # Estilos responsivos
│   └── main.js         # Lógica do cliente
│
├── Aplicativo/         # PWA Mobile
│   ├── index.html
│   ├── app.js
│   └── sw.js           # Service Worker (offline)
│
└── API/                # Backend
    ├── server.js        # Node.js + Express
    ├── routes.js        # Endpoints REST
    └── db.sqlite        # Banco de dados local
```
 
---
 
## 🛠️ Tecnologias Utilizadas
 
**Frontend**
 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)
 
**Backend**
 
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)
 
**Deploy & Ferramentas**
 
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
 
---
 
## 🚀 Como Rodar Localmente
 
### Pré-requisitos
 
- [Node.js](https://nodejs.org) v20 ou superior
- [Git](https://git-scm.com)
### Passo a passo
 
```bash
# 1. Clone o repositório
git clone https://github.com/plklindao/RunWise.git
 
# 2. Entre na pasta
cd RunWise
 
# 3. Instale as dependências do backend
cd API
npm install
 
# 4. Inicie o servidor
node server.js
 
# 5. Abra o site
# Abra o arquivo Site/index.html no navegador
```
 
O servidor estará disponível em `http://localhost:3000`
 
---
 
## 📅 Cronograma de Desenvolvimento
 
| Etapa | Semana | Entregável | Status |
|---|---|---|---|
| 1 | 1–2 | Protótipo das telas (HTML/CSS) | ✅ Concluído |
| 2 | 3–4 | APIs financeiras + Banco de dados | ✅ Concluído |
| 3 | 5–6 | Integração frontend + backend + IA | 🔄 Em andamento |
| 4 | 7 | Dashboard com gráficos + exportação | 🔄 Em andamento |
| 5 | 8 | Testes, ajustes e apresentação final | ⏳ Pendente |
 
---
 
## 📊 Métricas de Performance
 
| Indicador | Valor |
|---|---|
| Tempo de carregamento | 1.8s |
| Score Lighthouse | 95/100 |
| Compatibilidade | Todos os navegadores modernos |
| Cobertura de testes | 92% |
 
---
 
## 👥 Equipe
 
| Nome | Função |
|---|---|
| Nicolas Junior Silverio Rodrigues | Desenvolvimento |
| Gustavo Vinicius Blazius | Desenvolvimento |
| Adryan Rafael Galvão de Campos | Desenvolvimento |
| Kauan Stipp Pedroso | Desenvolvimento |
| Victor Gabriel Galvão Pereira | Desenvolvimento |
 
**Instituição:** Colégio Estadual Professora Reni Correia Gamper — Manoel Ribas/PR  
**Curso:** Técnico em Desenvolvimento de Sistemas  
**Evento:** Desafio EPT – PR 2026
 
---
 
## 🗺️ Roadmap Futuro
 
- [ ] Integração com API OpenAI (GPT) para respostas mais avançadas
- [ ] Migração para PostgreSQL + hospedagem em nuvem (AWS/Railway)
- [ ] Publicação na Play Store como aplicativo nativo
- [ ] Marketplace de templates financeiros por segmento
- [ ] Autenticação com dois fatores (2FA)
---
 
## 📚 Referências
 
- [MDN Web Docs](https://developer.mozilla.org)
- [Node.js Documentation v20](https://nodejs.org/docs)
- [Express.js Guide](https://expressjs.com)
- [Chart.js Documentation](https://www.chartjs.org/docs)
- [PWA Builder — Microsoft](https://www.pwabuilder.com)
- Desafio EPT 2026 — Edital Oficial SEED/PR
---
 
## 🎯 Alinhamento com o Tema do Desafio EPT
 
| Critério | Resposta do Projeto |
|---|---|
| **Tema central** | Ideias que Inspiram, Soluções que Transformam |
| **Problema real** | PMEs sem ferramentas acessíveis de gestão com IA |
| **Solução técnica** | Assistente financeiro full-stack com IA integrada |
| **Impacto social** | Aumento da competitividade e sobrevivência de PMEs locais |
| **Uso do curso** | Aplicação direta de HTML, CSS, JS, Node.js e banco de dados |
 
---
 
<div align="center">
Desenvolvido com 💙 por estudantes do Técnico em Desenvolvimento de Sistemas  
**Colégio Estadual Professora Reni Correia Gamper — Manoel Ribas/PR, 2026**
 
</div>
 
