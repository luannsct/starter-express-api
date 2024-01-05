const validarCorpoRequisicaoNovaCotacao = (esquema) => {
    return async (req, res, next) => {
        try {
            await esquema.validateAsync(req.body)
            next()
        } catch (error) {
            return res.status(400).json({ erro: error.message })
        }
    }
}

const validarBuscaFornecedor = (req, res) => {
    const { nomecliente, emailcliente, consumokwhmensal } = req.body;
    if (!nomecliente) {
        return res.status(400).json({ message: "Oops... Informe o nome da empresa" })
    }
}

module.exports = { validarCorpoRequisicaoNovaCotacao }
