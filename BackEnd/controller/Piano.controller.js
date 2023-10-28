const PianoRepository = require("../repository/Usuario.repository")

class PianoController {
    listar = async (req, res) => {
        return res.status(200).json(await PianoRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.tipo & !body.marca & !body.modelo & !body.serie & !body.numeroTeclas & !body.tipoTeclas & !body.numeroPedais & !body.comprimento & !body.peso & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await PianoRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new PianoController()