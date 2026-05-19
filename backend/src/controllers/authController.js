// Controlador de autenticação
//
// register(req, res):
//   - Leia nome, email, senha do req.body
//   - Faça hash da senha com bcrypt
//   - Salve o usuário (arquivo JSON ou banco)
//   - Retorne { message: "Cadastrado!" } ou erro 400
//
// login(req, res):
//   - Leia email e senha do req.body
//   - Busque o usuário pelo email
//   - Compare a senha com bcrypt.compare
//   - Gere token JWT com jwt.sign e retorne
