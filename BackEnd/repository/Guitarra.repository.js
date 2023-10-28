const {TabelaGuitarra} = require("../scriptsbd/modelsbd")

class GuitarraRepository {
    cadastrar = async (obj) => {
        return await TabelaGuitarra.create(obj)    
    }
}
module.exports = new GuitarraRepository() 