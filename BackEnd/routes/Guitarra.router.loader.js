const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const GuitarraController = require('../controller/Guitarra.controller')

class GuitarraRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'guitarra/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', GuitarraController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', GuitarraController.cadastrar)
    }

}

module.exports = GuitarraRouterLoader