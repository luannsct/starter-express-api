const express = require('express')
const { logarUsuario, cadastrarNovoUsuario } = require('../controllers/usuarios')
const { validarLoginUsuario, validarCadastro, validarCorpoRequisicaoLogin } = require('../middlewares/usuarios')
const { usuaroSchemaLogin } = require('../schemas/usuarios')
const routes = express()


routes.all('/', (req, res) => {
    return res.json(`Olá Mundo!`)
})
routes.post('/sign', validarCadastro, cadastrarNovoUsuario)
routes.post('/login', validarCorpoRequisicaoLogin(usuaroSchemaLogin), validarLoginUsuario, logarUsuario)

module.exports = { routes }
