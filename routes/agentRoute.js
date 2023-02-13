const routeAgent = require('express').Router()
const agent = require('../controllers/agentcontroller')
const auth = require('../auth/auth')

routeAgent.post('/agent', auth,  agent.addAdmin)
routeAgent.get('/agent', auth, agent.getAll)
routeAgent.get('/agent/:id', auth,agent.getfindId)
routeAgent.put('/agent/:id', auth,agent.updateId)
routeAgent.delete('/agent/:id', auth,agent.deleteId)
routeAgent.post('/loginCaissier', agent.LoginCaissier)
routeAgent.post('/loginGuichet', agent.LoginGuichet)

module.exports = routeAgent