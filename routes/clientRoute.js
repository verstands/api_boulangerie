const routeClient = require('express').Router()
const client = require('../controllers/clientContreoller')
const auth = require('../auth/auth')


routeClient.post('/client', auth,client.addAdmin)
routeClient.get('/client', auth,client.getAll)
routeClient.get('/client/:id', auth,client.getfindId)
routeClient.put('/client/:id', auth,client.updateId)
routeClient.delete('/client/:id', auth,client.deleteId)

module.exports = routeClient