const TrompeteRepository = require("../repository/Usuario.repository")

class TrompeteController {
    listar = async (req, res) => {
        return res.status(200).json(await TrompeteRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.marca & !body.modelo & !body.serie & !body.afinacao & !body.material & !body.numeroPistos & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await TrompeteRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new TrompeteController()