const express = require('express')
const cors = require('cors')
const { logarUsuario, cadastrarNovoUsuario } = require('../controllers/usuarios')
const { validarLoginUsuario, validarCadastro, validarCorpoRequisicaoLogin, validarCorpoRequisicaoCadastro } = require('../middlewares/usuarios')
const { usuaroSchemaLogin, usuarioSchemaCadastro } = require('../schemas/usuarios')
const routes = express()

routes.use(cors())

routes.post('/sign', validarCorpoRequisicaoCadastro(usuarioSchemaCadastro), validarCadastro, cadastrarNovoUsuario)
routes.post('/login', validarCorpoRequisicaoLogin(usuaroSchemaLogin), validarLoginUsuario, logarUsuario)

routes.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

module.exports = { routes }
