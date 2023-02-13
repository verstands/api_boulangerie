const routeCommande = require('express').Router()
const commande = require('../controllers/commandeController')
const auth = require('../auth/auth')


routeCommande.post('/depotAdd', auth,commande.addAdmin)
routeCommande.get('/depot', auth,commande.Depot)
routeCommande.get('/retrait', auth,commande.Retrait)
routeCommande.delete('/commande/:id', auth,commande.deleteId)
routeCommande.get('/commandetoday', auth,commande.countToday)


module.exports = routeCommande