const UserRepository = require("../repository/Usuario.repository")

class UserController {
    listar = async (req, res) => {
        return res.status(200).json(await UserRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.email & !body.senha) {
                throw new Error("AMBOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await UserRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um usuario."})
        }
    }
    atualizar = async (req, res) => {
        try {
            const body = req.body

            if (!body.id) {
                throw new Error("Registro deve ter um id" + body)
            }
            return res.status(200).json(await UserRepository.atualizar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao atualizar um registro."})
        }
    }
}
module.exports = new UserController()