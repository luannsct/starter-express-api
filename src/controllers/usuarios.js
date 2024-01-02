const { hash } = require("bcrypt");
const knex = require("../config/db/knex");
const jwt = require('jsonwebtoken')
require('dotenv').config();

const logarUsuario = async (req, res) => {
    const { usuario } = req
    try {
        const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASSWORD, { expiresIn: '24h' })
        return res.status(200).json({ usuario, token })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno." })
    }
}

const cadastrarNovoUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const senhaCriptografada = await hash(senha, 10);
        const inserirDados = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada }).returning('*');
        if (inserirDados.length <= 0) {
            return res.status(500).json({ message: "Oops... " });
        }
        const { senha: _, ...usuario } = inserirDados[0]
        return res.status(200).json(usuario);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Oops... " })
    }
}

module.exports = {
    logarUsuario,
    cadastrarNovoUsuario
}
