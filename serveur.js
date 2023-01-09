const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.get('/', (req, res) => {
    res.json({message : 'Api'})
})

app.listen(port, () => console.log(`Serveur est lancé sur http://localhost:${port}`))