const routeAdmin = require('express').Router()
const login = require('../controllers/login')

routeAdmin.post('/login', login.Loginverify )

module.exports = routeAdmin