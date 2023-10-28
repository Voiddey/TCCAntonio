const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const BateriaController = require('../controller/Bateria.controller')

class BateriaRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'bateria/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', BateriaController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', BateriaController.cadastrar)
    }

}

module.exports = BateriaRouterLoader