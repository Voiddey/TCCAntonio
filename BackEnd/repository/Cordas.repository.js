const {TabelaCordas} = require("../scriptsbd/modelsbd")
class CordasRepository {
    cadastrar = async (obj) => {
        return await TabelaCordas.create(obj)    
    }
}
module.exports = new CordasRepository()