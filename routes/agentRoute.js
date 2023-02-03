const routeAgent = require('express').Router()
const agent = require('../controllers/agentcontroller')

routeAgent.post('/agent', agent.addAdmin)
routeAgent.get('/agent', agent.getAll)
routeAgent.get('/agent/:id', agent.getfindId)
routeAgent.put('/agent/:id', agent.updateId)
routeAgent.delete('/agent/:id', agent.deleteId)

module.exports = routeAgent