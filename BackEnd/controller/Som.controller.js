const SomRepository = require("../repository/Usuario.repository")

class SomController {
    listar = async (req, res) => {
        return res.status(200).json(await SomRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.tipo & !body.marca & !body.modelo & !body.serie & !body.potencia & !body.impedancia & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await SomRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new SomController()