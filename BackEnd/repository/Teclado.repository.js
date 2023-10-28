const {TabelaTeclado} = require("../scriptsbd/modelsbd")

class TecladoRepository {
    cadastrar = async (obj) => {
        return await TabelaTeclado.create(obj)    
    }
}
module.exports = new TecladoRepository()