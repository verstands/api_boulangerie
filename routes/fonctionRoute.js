const routeFonction = require('express').Router()
const fonction = require('../controllers/fonctionController')

routeFonction.post('/fonction', fonction.addAdmin)
routeFonction.get('/fonction', fonction.getAll)
routeFonction.get('/fonction/:id', fonction.getfindId)
routeFonction.put('/fonction/:id', fonction.updateId)
routeFonction.delete('/fonction/:id', fonction.deleteId)

module.exports = routeFonction