const routeAdmin = require('express').Router()
const administrateur = require('../controllers/administrateurController')
const auth = require('../auth/auth')

routeAdmin.post('/administrateur', auth,administrateur.addAdmin)
routeAdmin.get('/administrateur',auth , administrateur.getAll)
routeAdmin.get('/administrateur/:id', auth, administrateur.getfindId)
routeAdmin.put('/administrateur/:id', auth,administrateur.updateId)
routeAdmin.delete('/administrateur/:id', auth,administrateur.deleteId)
routeAdmin.post('/loginAdmin', administrateur.Loginverify )

module.exports = routeAdmin