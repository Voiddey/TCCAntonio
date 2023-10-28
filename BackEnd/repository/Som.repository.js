const {TabelaSom} = require("../scriptsbd/modelsbd")
class SomRepository {
    cadastrar = async (obj) => {
        return await TabelaSom.create(obj)    
    }
}
module.exports = new SomRepository()