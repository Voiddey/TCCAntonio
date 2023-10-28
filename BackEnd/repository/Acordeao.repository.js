const {TabelaAcordeao} = require("../scriptsbd/modelsbd")
class AcordeaoRepository {
    cadastrar = async (obj) => {
        return await TabelaAcordeao.create(obj)    
    }
}
module.exports = new AcordeaoRepository()