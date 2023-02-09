const jwt = require('jsonwebtoken')
const prive_key =  require('./priveKey')

module.exports = (req, res, next) => {
    const authorization = req.headers['authorization']
    if(!authorization){
        const msg = `Vous n'avez pas fourni le jéton d'authentification.`;
        return res.status(401).json({ msg });
    }else{
        const token =  authorization && authorization.split(' ')[1];
        jwt.verify(token, prive_key, (err, user) => {
            if (err) {
                return res.status(403).json("Votre jeton n'est pas valide " + err);
            } else {
                req.user = user;
                next();    
            }
        })
    }
}