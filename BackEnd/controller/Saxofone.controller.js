const SaxofoneRepository = require("../repository/Usuario.repository")

class SaxofoneController {
    listar = async (req, res) => {
        return res.status(200).json(await SaxofoneRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.marca & !body.modelo & !body.serie & !body.afinacao & !body.material & !body.numeroChaves & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await SaxofoneRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new SaxofoneController()