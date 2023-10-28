const {TabelaTrompete} = require("../scriptsbd/modelsbd")
class TrompeteRepository {
    cadastrar = async (obj) => {
        return await TabelaTrompete.create(obj)    
    }
}
module.exports = new TrompeteRepository()