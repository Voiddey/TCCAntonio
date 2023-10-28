const BateriaRepository = require("../repository/Usuario.repository")

class BateriaController {
    listar = async (req, res) => {
        return res.status(200).json(await BateriaRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.marca & !body.modelo & !body.serie & !body.preco & !body.anofabricacao & !body.descricao & !body.tipo & !body.ntambores & !body.materialtambores & !body.pratos & !body.hardware & !body.pele & !body.sistemasuspensao & !body.pedaisbumbo & !body.dimensoes & !body.peso) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await BateriaRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new BateriaController()