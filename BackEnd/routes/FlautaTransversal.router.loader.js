const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const FlautaTransversalController = require('../controller/FlautaTransversal.controller')

class FlautaTransversalRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'flautatransversal/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', FlautaTransversalController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', FlautaTransversalController.cadastrar)
    }

}

module.exports = FlautaTransversalRouterLoader