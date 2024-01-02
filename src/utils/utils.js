const { compare, hash } = require("bcrypt")

const compararSenha = async (senha, senhaCriptografada) => {
    return await compare(senha, senhaCriptografada)
}
const criptografarSenhaUsuario = async (senha) => {
    return await hash(senha, 10)
}
