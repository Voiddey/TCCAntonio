const {TabelaSaxofone} = require("../scriptsbd/modelsbd")
class SaxofoneRepository {
    cadastrar = async (obj) => {
        return await TabelaSaxofone.create(obj)    
    }
}
module.exports = new SaxofoneRepository()