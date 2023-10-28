const TecladoRepository = require("../repository/Usuario.repository")

class TecladoController {
    listar = async (req, res) => {
        return res.status(200).json(await TecladoRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.marca & !body.modelo & !body.serie & !body.numeroTeclas & !body.tipoTeclas & !body.polifonia & !body.peso & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await TecladoRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new TecladoController()