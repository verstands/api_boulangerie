const routecategorie = require('express').Router()
const categorie = require('../controllers/categorieController')
const auth = require('../auth/auth')

routecategorie.post('/categorie', auth,categorie.addAdmin)
routecategorie.get('/categorie', auth,categorie.getAll)
routecategorie.get('/categorie/:id', auth,categorie.getfindId)
routecategorie.put('/categorie/:id', auth,categorie.updateId)
routecategorie.delete('/categorie/:id', auth,categorie.deleteId)

module.exports = routecategorie