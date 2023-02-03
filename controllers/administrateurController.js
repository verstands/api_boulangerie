const db  = require('../models')
const ADMIN = db.administrateur
const primaryKey = require('../auth/priveKey')
const jwt = require('jsonwebtoken')

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
    const test = ADMIN.findOne({where : {email : req.body.email}})
    const testP = ADMIN.findOne({where : {password : req.body.password}})
    if(!test){
        const message = 'incorrect';
        return res.status(400).json({ message })
    }
    if(!testP){
        const message = 'incorrect password';
        return res.status(400).json({ message })
    }
    const jeton = jwt.sign(
        { id: user.id },
        primaryKey,
        { expiresIn: "5h" }
    )
    const message = `L'utilisateur a été connecté avec succès`;
    return res.json({ message, jeton })
}

module.exports = {
    addAdmin,
    getAll,
    getfindId,
    deleteId,
    updateId,
    Loginverify
}