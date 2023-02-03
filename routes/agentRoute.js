const routeAdmin = require('express').Router()
const agent = require('../controllers/agentcontroller')

routeAdmin.post('/agent', agent.addAdmin)
routeAdmin.get('/agent', agent.getAll)
routeAdmin.get('/agent/:id', agent.getfindId)
routeAdmin.update('/agent/:id', agent.updateId)
routeAdmin.delete('/agent/:id', agent.deleteId)

module.exports = routeAdmin