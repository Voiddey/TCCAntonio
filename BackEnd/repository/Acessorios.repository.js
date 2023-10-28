const {TabelaAcessorios} = require("../scriptsbd/modelsbd")
class AcessoriosRepository {
    cadastrar = async (obj) => {
        return await TabelaAcessorios.create(obj)    
    }
}
module.exports = new AcessoriosRepository()