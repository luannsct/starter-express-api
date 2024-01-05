const joi = require('joi')
const solicitarCotacaoSchema = joi.object({
    emailcliente: joi.string().email().max(100).required().messages({
        "string.base": "O email não é válido!",
        "string.max": "O e-mail deve ter no máximo 100 caracteres",
        'string.required': "O e-mail é obrigatório!"
    }),
    nomecliente: joi.string().required().messages({
        "any.required": "A senha não foi informada.",
        "string.base": "A senha não tem formato válido."

    }),
    consumokwhmensal: joi.string().required().messages({
        "any.required": "A senha não foi informada.",
        "string.base": "A senha não tem formato válido."

    })
})

module.exports = { solicitarCotacaoSchema }
