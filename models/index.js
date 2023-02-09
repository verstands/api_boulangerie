const dbconfig = require('../config/dbcConfig.js')
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
     dbconfig.DB,
     dbconfig.USER,
     dbconfig.PASSWORD,
     {
        host : dbconfig.HOST,
        dialect : dbconfig.dialect,
        pool : {
            max : dbconfig.pool.max,
            min : dbconfig.pool.min,
            acquire : dbconfig.pool.acquire,
            idle : dbconfig.pool.idle
        }
     }
)

sequelize.authenticate()
     .then(() => console.log('Connexion a la base de donné reussi'))
     .catch(err => console.log('Erreur de la connexion ' + err))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//les tables
     db.produits = require('./produitModel.js')(sequelize, DataTypes)
     db.administrateur = require('./administrateurModel.js')(sequelize, DataTypes)
     db.fonction = require('./fonctionModel.js')(sequelize, DataTypes)
     db.client = require('./clientModel.js')(sequelize, DataTypes)
     db.categorie = require('./categorieModel.js')(sequelize, DataTypes)
     db.agent = require('./agentModel.js')(sequelize, DataTypes)


db.sequelize.sync({force : false})
     .then(() => console.log('La synchronisation reussie'))
     .catch(err => console.log('Erreur de la synchrosation'))

module.exports = db