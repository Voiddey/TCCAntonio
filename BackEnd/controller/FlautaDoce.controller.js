const FlautaDoceRepository = require("../repository/Usuario.repository")

class FlautaDoceController {
    listar = async (req, res) => {
        return res.status(200).json(await FlautaDoceRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.marca & !body.modelo & !body.afinacao & !body.comprimento & !body.faixaTonal & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await FlautaDoceRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new FlautaDoceController()