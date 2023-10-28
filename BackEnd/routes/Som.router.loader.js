const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const SomController = require('../controller/Som.controller')

class SomRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'som/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', SomController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', SomController.cadastrar)
    }

}

module.exports = SomRouterLoader