const BaixoRepository = require("../repository/Usuario.repository")

class BaixoController {
    listar = async (req, res) => {
        return res.status(200).json(await BaixoRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.marca & !body.modelo & !body.serie & !body.preco & !body.raioescala & !body.ntrastes & !body.anofabricacao & !body.material & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await BaixoRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new BaixoController()