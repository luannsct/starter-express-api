const express = require('express')
const cors = require('cors')
const { logarUsuario, cadastrarNovoUsuario } = require('../controllers/usuarios')
const { validarLoginUsuario, validarCadastro, validarCorpoRequisicaoLogin } = require('../middlewares/usuarios')
const { usuaroSchemaLogin } = require('../schemas/usuarios')
const routes = express()

routes.use(cors())

routes.post('/sign', validarCadastro, cadastrarNovoUsuario)
routes.post('/login', validarCorpoRequisicaoLogin(usuaroSchemaLogin), validarLoginUsuario, logarUsuario)

routes.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

module.exports = { routes }
