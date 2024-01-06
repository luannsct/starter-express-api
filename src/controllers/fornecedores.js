const { knexDeploy: knex } = require("../config/db/knex");
const novaProposta = async (req, res) => {
    const { id_fornecedor, nomecliente, emailcliente, consumokwhmensal } = req
    try {
        const inserirDados = await knex('price').insert({ id_fornecedor, nomecliente, emailcliente, consumokwhmensal }).returning('*');
        if (inserirDados.length <= 0) {
            return res.status(500).json({ message: "Oops... Infelizmente não foi possivel enviar sua proposta, tente novamente mais tarde." });
        }
        return res.status(200).json({ message: "Dados Salvos com sucesso!" })
    } catch (error) {
        return res.status(500).json({ erro: "Oops... Não deu certo sua solicitação tente novamente mais tarde." })
    }
}
const listarPropostasPorEmail = async (req, res) => {
    const em = 'LUAN.NSCT@GMAIL.COM'
    try {
        const resultado = await knex.select('*').from('price').join('supplier', 'id_fornecedor', '=', 'supplier.id').where('emailcliente', em)
        return res.status(200).json(resultado);
    } catch (error) {
        return res.status(500).json({ message: "Oops...." })
    }
}
const buscarFornecedorEnergia = async (req, res) => {
    const { consumokwhmensal } = req.body;
    const consumokwhmensalFloat = parseFloat(consumokwhmensal)
    try {
        const resultado = await knex('supplier').where('khwminimo', '<=', consumokwhmensalFloat).orderBy('avaliacaomedia', 'desc').limit(6)
        if (resultado <= 0) {
            return res.status(404).json({ erro: "Não encontramos nenhum fornecedor que possa atendê-lo no momento." })
        }
        console.log(consumokwhmensalFloat, resultado)
        return res.status(200).json(resultado);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ erro: "Oops... Estamos com problemas para processar sua solicitação, tente novamente mais tarde." })
    }

}
module.exports = { listarPropostasPorEmail, buscarFornecedorEnergia, novaProposta }
