const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const FlautaDoceController = require('../controller/FlautaDoce.controller')

class FlautaDoceRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'flautadoce/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', FlautaDoceController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', FlautaDoceController.cadastrar)
    }

}

module.exports = FlautaDoceRouterLoader