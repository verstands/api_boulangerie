const db  = require('../models')
const ADMIN = db.administrateur

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
    let email = req.body.email
    let password = req.body.password
    const verify = ADMIN.findOne({where : { email : email, password : password}})
        .then(() => { message : 'ok'})
        .catch(err => {message : 'erreur' + err})
}

module.exports = {
    addAdmin,
    getAll,
    getfindId,
    deleteId,
    updateId,
    Loginverify
}