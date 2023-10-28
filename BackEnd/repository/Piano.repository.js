const {TabelaPiano} = require("../scriptsbd/modelsbd")
class PianoRepository {
    cadastrar = async (obj) => {
        return await TabelaPiano.create(obj)    
    }
}
module.exports = new PianoRepository()