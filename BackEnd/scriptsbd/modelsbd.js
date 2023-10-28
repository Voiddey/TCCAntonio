const {Sequelize} = require("sequelize");
const {sequelize} = require("./conexaobd")

const TabelaGuitarra = sequelize.define('TabelaGuitarra', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING,
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    raioescala: {
        type: Sequelize.FLOAT
    },
    ntrastes: {
        type: Sequelize.INTEGER
    },
    material: {
        type: Sequelize.STRING
    },
    anofabricacao: {
        type: Sequelize.INTEGER
    },
    descricao: {
        type: Sequelize.TEXT
    }
})
const TabelaBaixo = sequelize.define('TabelaBaixo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING,
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    raioescala: {
        type: Sequelize.FLOAT
    },
    ntrastes: {
        type: Sequelize.INTEGER
    },
    material: {
        type: Sequelize.STRING
    },
    anofabricacao: {
        type: Sequelize.INTEGER
    },
    descricao: {
        type: Sequelize.TEXT
    }
})
const TabelaViolao = sequelize.define('TabelaViolao', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING,
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    raioescala: {
        type: Sequelize.FLOAT
    },
    ntrastes: {
        type: Sequelize.INTEGER
    },
    anofabricacao: {
        type: Sequelize.INTEGER
    },
    material: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.TEXT
    }
})
const TabelaBateria = sequelize.define('TabelaBateria', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING,
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    anofabricacao: {
        type: Sequelize.INTEGER
    },
    descricao: {
        type: Sequelize.TEXT
    },
    tipo: {
        type: Sequelize.STRING
    },
    ntambores: {
        type: Sequelize.INTEGER
    },
    materialtambores: {
        type: Sequelize.STRING
    },
    tamanhotambores: {
        type: Sequelize.STRING
    },
    pratos: {
        type: Sequelize.STRING
    },
    hardware: {
        type: Sequelize.STRING
    },
    pele: {
        type: Sequelize.STRING
    },
    sistemasuspensao: {
        type: Sequelize.STRING
    },
    pedaisbumbo: {
        type: Sequelize.STRING
    },
    dimensoes: {
        type: Sequelize.STRING
    },
    peso: {
        type: Sequelize.FLOAT
    },
})
const TabelaFlautaDoce = sequelize.define('TabelaFlautaDoce', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    afinacao: {
        type: Sequelize.STRING
    },
    material: {
        type: Sequelize.STRING
    },
    comprimento: {
        type: Sequelize.FLOAT
    },
    faixaTonal: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaFlautaTransversal = sequelize.define('TabelaFlautaTransversal', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    afinacao: {
        type: Sequelize.STRING
    },
    material: {
        type: Sequelize.STRING
    },
    comprimento: {
        type: Sequelize.FLOAT
    },
    numeroChaves: {
        type: Sequelize.INTEGER
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
})
const TabelaTeclado = sequelize.define('TabelaTeclado', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    numeroTeclas: {
        type: Sequelize.INTEGER
    },
    tipoTeclas: {
        type: Sequelize.STRING
    },
    polifonia: {
        type: Sequelize.INTEGER
    },
    peso: {
        type: Sequelize.FLOAT
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaPiano = sequelize.define('TabelaPiano', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.ENUM("Piano", "PianoEletrico"), // "Piano" ou "Piano Eletrico"
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    numeroTeclas: {
        type: Sequelize.INTEGER
    },
    tipoTeclas: {
        type: Sequelize.STRING
    },
    numeroPedais: {
        type: Sequelize.INTEGER
    },
    comprimento: {
        type: Sequelize.FLOAT
    },
    peso: {
        type: Sequelize.FLOAT
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaSaxofone = sequelize.define('TabelaSaxofone', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    afinacao: {
        type: Sequelize.STRING
    },
    material: {
        type: Sequelize.STRING
    },
    numeroChaves: {
        type: Sequelize.INTEGER
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaTrompete = sequelize.define('TabelaTrompete', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    afinacao: {
        type: Sequelize.STRING
    },
    material: {
        type: Sequelize.STRING
    },
    numeroPistos: {
        type: Sequelize.INTEGER
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaAcordeao = sequelize.define('TabelaAcordeao', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    numeroBaixos: {
        type: Sequelize.INTEGER
    },
    numeroTeclas: {
        type: Sequelize.INTEGER
    },
    tipoBaixos: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaCordas = sequelize.define('TabelaCordas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.ENUM('Violino', 'Violoncelo', 'Viola', 'Contrabaixo')
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    numeroCordas: {
        type: Sequelize.INTEGER
    },
    materialTampo: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaSom = sequelize.define('TabelaSom', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING // Tipo de produto de áudio, como "Alto-falante", "Amplificador", etc.
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    potencia: {
        type: Sequelize.FLOAT
    },
    impedancia: {
        type: Sequelize.INTEGER
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaAcessorios = sequelize.define('TabelaAcessorios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING // Tipo de acessório musical, como "Baquetas", "Pedal de Efeito", "Suporte de Teclado", etc.
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaUsuarios = sequelize.define("TabelaUsuarios", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
})
sequelize.sync()

module.exports = {TabelaAcessorios, TabelaAcordeao, TabelaBaixo, TabelaBateria, TabelaCordas, TabelaFlautaDoce, TabelaFlautaTransversal, TabelaGuitarra, TabelaPiano, TabelaSaxofone, TabelaSom, TabelaTeclado, TabelaTrompete, TabelaUsuarios, TabelaViolao};