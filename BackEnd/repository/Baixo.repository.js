const {TabelaBaixo} = require("../scriptsbd/modelsbd")

class BaixoRepository {
    cadastrar = async (obj) => {
        return await TabelaBaixo.create(obj)    
    }
}
module.exports = new BaixoRepository()