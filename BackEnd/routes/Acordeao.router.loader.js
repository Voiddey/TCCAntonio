const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const AcordeaoController = require('../controller/Acordeao.controller')

class AcordeaoRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'acordeao/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', AcordeaoController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', AcordeaoController.cadastrar)
    }

}

module.exports = AcordeaoRouterLoader