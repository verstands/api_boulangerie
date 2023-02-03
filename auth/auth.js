const jwt = require('jsonwebtoken')
const prive_key =  require('./priveKey')

module.exports = (req, res, next) => {
    const authorization = req.headers.authorization
    if(!authorization){
        const msg = `Vous n'avez pas fourni le jéton d'authentification.`;
        return res.status(401).json({ msg });
    }else{
        const token = autorization.split(' ')[1];
    }
}