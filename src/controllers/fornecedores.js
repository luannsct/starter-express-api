const knex = require("../config/db/knex");
const novaProposta = async (req, res) => {

    try {
        const inserirDados = await knex('price').insert({ id_fornecedor, nomecliente, emailcliente, consumokwhmensal }).returning('*');
        if (inserirDados.length <= 0) {
            return res.status(500).json({ message: "Oops... Infelizmente não foi possivel enviar sua proposta, tente novamente mais tarde." });
        }
        const { senha: _, ...usuario } = inserirDados[0]
    } catch (error) {

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
    const { nomecliente, emailcliente, consumokwhmensal } = req.body;
    console.log(typeof (consumokwhmensal))

}
module.exports = { listarPropostasPorEmail, buscarFornecedorEnergia }
