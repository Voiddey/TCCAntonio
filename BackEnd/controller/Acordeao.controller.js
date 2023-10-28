const AcordeaoRepository = require("../repository/Acordeao.repository")

class AcordeaoController {
    listar = async (req, res) => {
        return res.status(200).json(await AcordeaoRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.marca & !body.modelo & !body.serie & !body.numeroBaixos & !body.numeroTeclas & !body.tiposBaixos & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await AcordeaoRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
}
module.exports = new AcordeaoController()