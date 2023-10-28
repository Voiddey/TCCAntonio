const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const BaixoController = require('../controller/Baixo.controller')

class BaixoRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'baixo/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', BaixoController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', BaixoController.cadastrar)
    }

}

module.exports = BaixoRouterLoader