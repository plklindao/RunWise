# RunWise — Gerenciamento Empresarial Inteligente

## Estrutura
- /site     → Site principal (React)
- /app      → App mobile (React Native + Expo)
- /backend  → Servidor API (Node.js + Express)

## Como rodar

### Backend
# Entre na pasta: cd backend
# Instale: npm install
# Crie o .env com PORT, JWT_SECRET
# Rode: npm run dev

### Site
# Entre na pasta: cd site
# Inicialize: npx create-react-app .
# Instale extras: npm install react-router-dom axios
# Rode: npm start

### App
# Entre na pasta: cd app
# Inicialize: npx create-expo-app .
# Instale extras: npm install @react-navigation/native axios expo-secure-store
# Rode: npx expo start

## Equipe
# Membros: Nicolas, G-Dreake, Bigode, PLK

## Convenções Git
# feat:   nova funcionalidade
# fix:    correção de bug
# style:  mudança visual sem lógica
# update: atualização de conteúdo
# docs:   documentação
