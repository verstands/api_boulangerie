const routeAdmin = require('express').Router()
const administrateur = require('../controllers/administrateurController')

routeAdmin.post('/administrateur', administrateur.addAdmin)
routeAdmin.get('/administrateur', administrateur.getAll)
routeAdmin.get('/administrateur/:id', administrateur.getfindId)
routeAdmin.update('/administrateur/:id', administrateur.updateId)
routeAdmin.delete('/administrateur/:id', administrateur.deleteId)

module.exports = routeAdmin