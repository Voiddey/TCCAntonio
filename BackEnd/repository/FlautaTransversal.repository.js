const {TabelaFlautaTransversal} = require("../scriptsbd/modelsbd")

class FlautaTransversalRepository {
    cadastrar = async (obj) => {
        return await TabelaFlautaTransversal.create(obj)    
    }
}
module.exports = new FlautaTransversalRepository()