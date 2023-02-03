const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000


const routerAdmin = require('./routes/adminsitrateurRoute')
const routerAgent = require('./routes/agentRoute')
const routerCategorie = require('./routes/categorie')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true}))


app.use('/api', routerAdmin)
app.use('/api', routerAgent)
app.use('/api', routerCategorie)


app.get('/', (req, res) => {
    res.json({message : 'Api'})
})

app.listen(port, () => console.log(`Serveur est lancé sur http://localhost:${port}`))