const routeClient = require('express').Router()
const client = require('../controllers/clientContreoller')

routeClient.post('/client', client.addAdmin)
routeClient.get('/client', client.getAll)
routeClient.get('/client/:id', client.getfindId)
routeClient.put('/client/:id', client.updateId)
routeClient.delete('/client/:id', client.deleteId)

module.exports = routeClient