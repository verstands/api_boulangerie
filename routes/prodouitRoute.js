const routeProduit = require('express').Router()
const produit = require('../controllers/produitController')
const auth = require('../auth/auth')


routeProduit.post('/produit', auth,produit.addAdmin)
routeProduit.get('/produit', auth,produit.getAll)
routeProduit.get('/produit/:id', auth,produit.getfindId)
routeProduit.put('/produit/:id', auth,produit.updateId)
routeProduit.delete('/produit/:id', auth,produit.deleteId)

module.exports = routeProduit