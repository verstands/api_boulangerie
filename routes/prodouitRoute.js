const routeProduit = require('express').Router()
const produit = require('../controllers/produitController')

routeProduit.post('/produit', produit.addAdmin)
routeProduit.get('/produit', produit.getAll)
routeProduit.get('/produit/:id', produit.getfindId)
routeProduit.put('/produit/:id', produit.updateId)
routeProduit.delete('/produit/:id', produit.deleteId)

module.exports = routeProduit