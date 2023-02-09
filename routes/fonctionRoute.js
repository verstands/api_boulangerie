const routeFonction = require('express').Router()
const fonction = require('../controllers/fonctionController')
const auth = require('../auth/auth')


routeFonction.post('/fonction', auth,fonction.addAdmin)
routeFonction.get('/fonction', auth,fonction.getAll)
routeFonction.get('/fonction/:id', auth,fonction.getfindId)
routeFonction.put('/fonction/:id', auth,fonction.updateId)
routeFonction.delete('/fonction/:id', auth,fonction.deleteId)

module.exports = routeFonction