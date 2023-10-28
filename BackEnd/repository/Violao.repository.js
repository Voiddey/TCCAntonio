const {TabelaViolao} = require("../scriptsbd/modelsbd")

class ViolaoRepository {
    listar = async (req) => {
        const params = req.query
        const whereParams = {}
 
        if (params.email) {
          whereParams.email = params.email
        }
        
        return await TabelaUsuarios.findAll({where: whereParams})
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
        return await TabelaViolao.create(obj)    
    }
}
module.exports = new ViolaoRepository()