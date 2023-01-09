const dbconfig = require('../config/dbcConfig')
const {Sequelize, DateType} = require('sequelize')

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
     .catch(err => console.log('Erreur de la connexion' + err))

db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//les tables


db.sequelize.sync({force : false})
     .then(() => console.log('La synchronisation reussie'))
     .catch(err => console.log('Erreur de la synchrosation'))