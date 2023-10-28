const {TabelaFlautaDoce} = require("../scriptsbd/modelsbd")

class FlautaDoceRepository {
    cadastrar = async (obj) => {
        return await TabelaFlautaDoce.create(obj)    
    }
}
module.exports = new FlautaDoceRepository()