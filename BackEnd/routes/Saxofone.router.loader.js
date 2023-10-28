const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const SaxofoneController = require('../controller/Saxofone.controller')

class SaxofoneRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'saxofone/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', SaxofoneController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', SaxofoneController.cadastrar)
    }

}

module.exports = SaxofoneRouterLoader