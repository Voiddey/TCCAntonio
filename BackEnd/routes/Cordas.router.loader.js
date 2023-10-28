const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const CordasController = require('../controller/Cordas.controller')

class CordasRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'cordas/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', CordasController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', CordasController.cadastrar)
    }

}

module.exports = CordasRouterLoader