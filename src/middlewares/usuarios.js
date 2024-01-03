const { compare, hash } = require("bcrypt");
const knex = require("../config/db/knex");
const {
    emailOuSenhaInvalidos,
    erro500,
    usuarioNaoEncontrado,
    camposObrigatorios,
    emailJahExiste
} = require("../utils/mensagemPadrao");

const validarCadastro = async (req, res, next) => {
    const { nome, email, senha } = req.body;
    try {
        if (!nome || !email || !senha) {
            return res.status(400).json(camposObrigatorios);
        }
        const resultado = await knex.select('*').from('usuarios').where('email', email)
        if (resultado.length > 0) {
            return res.status(422).json(emailJahExiste)
        }
        next()
    } catch (error) {
        return res.status(500).json(erro500)
    }
}
const validarCorpoRequisicaoLogin = (esquema) => {
    return async (req, res, next) => {
        try {
            await esquema.validateAsync(req.body)
            req.usuario = {
                id: 1,
                nome: 'Luan',
                email: 'luan.nsct@gmail.com'
            }
            next()
        } catch (error) {
            return res.status(400).json({ erro: error.message })
        }
    }
}

const validarLoginUsuario = async (req, res, next) => {
    const { email, senha } = req.body;
    try {
        const resultado = await knex.select('*').from('usuarios').where('email', email)
        if (resultado.length === 0) {
            return res.status(404).json(usuarioNaoEncontrado);
        }
        const compararSenha = await compare(senha, resultado[0].senha)
        if (!compararSenha) {
            return res.status(401).json(emailOuSenhaInvalidos)
        }
        const { senha: _, ...usuario } = resultado[0];
        req.usuario = usuario;
        next();
    } catch (error) {
        return res.status(500).json({ erro500 })
    }

}


module.exports = { validarLoginUsuario, validarCadastro, validarCorpoRequisicaoLogin }
