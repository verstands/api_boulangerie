const routecategorie = require('express').Router()
const categorie = require('../controllers/categorieController')

routecategorie.post('/categorie', categorie.addAdmin)
routecategorie.get('/categorie', categorie.getAll)
routecategorie.get('/categorie/:id', categorie.getfindId)
routecategorie.put('/categorie/:id', categorie.updateId)
routecategorie.delete('/categorie/:id', categorie.deleteId)

module.exports = routecategorie