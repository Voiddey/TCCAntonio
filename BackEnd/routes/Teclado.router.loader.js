const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const TecladoController = require('../controller/Teclado.controller')

class TecladoRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'taclado/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', TecladoController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', TecladoController.cadastrar)
    }

}

module.exports = TecladoRouterLoader