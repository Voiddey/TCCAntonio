const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const TrompeteController = require('../controller/Trompete.controller')

class TrompeteRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'trompete/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', TrompeteController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', TrompeteController.cadastrar)
    }

}

module.exports = TrompeteRouterLoader