const db  = require('../models')
const ADMIN = db.administrateur
const jwt = require('jsonwebtoken')
const primarykey = require('../auth/priveKey')

const addAdmin = async (req, res) => {
    let data = {
        nom : req.body.nom,
        postnom : req.body.postnom,
        email : req.body.email,
        adresse : req.body.adresse,
        password : req.body.password
    }

    const admin = await ADMIN.create(data)
    let message = "l'administrateur a ete crée avec success";
    res.status(200).json({ 
        message : message,
        data : admin
    });
}

const getAll = async (req, res) => {
    const all = await ADMIN.findAll({})
    let message = "Les administrateurs";
    res.status(200).json({
        message : message,
        data : all
    });
}

const getfindId = async (req, res) => {
    let id = req.params.id;
    const getId = await ADMIN.findOne({where : {id : id}})
    res.status(200).json({
        data : getId
    })
}

const updateId = async (res, req) => {
    let id = req.params.id
    const updatId = await ADMIN.update({where : {id : id}})
    let message = "La modification a ete fait avec success"
    res.status(200).json({
        message : message
    })
}
const deleteId = async (req, res) => {
    let id = req.params.id
    const DeleteId = await ADMIN.destroy({ where : {id : id}})
    let message = "La suppresion a ete fait avec success"
    res.status(200).json({
        message : message
    })
}


const Loginverify = async (req, res) => {
    if (req.body.email && req.body.password) {
        dd = await ADMIN.findOne({where : {email : req.body.email, password : req.body.password}})
        if(dd){
            let userId = dd.id;
            const vv = 3 * 24 * 60 * 60 * 1000;
            const c = "555444666";
            const token = jwt.sign({id : userId}, c, {expiresIn : vv} )
            let message = 'l\'utilisateur est connecté'
            res.status(200).json({
                message, token, userId
            })
        }else{
            let message = "Utilisateur incorrect !!!"
            res.status(401).json({
                message : message
            })   
        }
        
    }
}

module.exports = {
    addAdmin,
    getAll,
    getfindId,
    deleteId,
    updateId,
    Loginverify
}