// Middleware de autenticação JWT
// - Leia o header Authorization: "Bearer TOKEN"
// - Extraia o token
// - Verifique com jwt.verify usando JWT_SECRET
// - Se válido: chame next()
// - Se inválido ou ausente: retorne status 401
