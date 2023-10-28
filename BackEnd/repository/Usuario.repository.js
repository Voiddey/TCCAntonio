const {TabelaUsuarios} = require("../scriptsbd/modelsbd")

class UserRepository {
    listar = async (req) => {
        const params = req.query
        const whereParams = {}
 
        if (params.email) {
          whereParams.email = params.email
        }
        
        return await TabelaUsuarios.findAll({email: whereParams})
    }
    delete = async (req) => {
        return await TabelaUsuarios.delete(req)
    }
    atualizar = async (obj) => {
        console.log('nao atualizado: ' + JSON.stringify(obj))
        const updated = await TabelaExemplo.findByPk(obj.id)
        console.log('atualizado: ' + JSON.stringify(updated))
        return await updated.update(obj)
    }
    cadastrar = async (obj) => {
        return await TabelaUsuarios.create(obj)    
    }

}
module.exports = new UserRepository()
