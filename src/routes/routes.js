const express = require('express')
const cors = require('cors')
const { logarUsuario, cadastrarNovoUsuario } = require('../controllers/usuarios')
const { validarLoginUsuario, validarCadastro, validarCorpoRequisicaoLogin, validarCorpoRequisicaoCadastro } = require('../middlewares/usuarios')
const { usuaroSchemaLogin, usuarioSchemaCadastro } = require('../schemas/usuarios')
const { listarPropostasPorEmail, buscarFornecedorEnergia } = require('../controllers/fornecedores')
const { validarCorpoRequisicaoNovaCotacao } = require('../middlewares/fornecedor')
const { solicitarCotacaoSchema } = require('../schemas/cliente')
const routes = express()

routes.use(cors())

routes.post('/cotacao', validarCorpoRequisicaoNovaCotacao(solicitarCotacaoSchema), buscarFornecedorEnergia)
routes.post('/novacotacao', novaProposta)

routes.all('/', (req, res) => {
    res.status(200).json({ message: "Olá Mundo!" })
})

module.exports = { routes }
