const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const UserController = require('../controller/Usuario.controller')

class UserRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'usuarios/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', UserController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', UserController.cadastrar)
    }

}

module.exports = UserRouterLoader