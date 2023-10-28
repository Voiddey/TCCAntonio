const {TabelaBateria} = require("../scriptsbd/modelsbd")

class BateriaRepository {
    cadastrar = async (obj) => {
        return await TabelaBateria.create(obj)    
    }
}
module.exports = new BateriaRepository()