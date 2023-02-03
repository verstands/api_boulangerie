const db  = require('../models')
const ADMIN = db.agent

const addAdmin = async (req, res) => {
    let data = {
        nom : req.nom.body,
        postnom : req.postnom.body,
        email : req.email.body,
        adresse : req.adresse.body,
        password : req.password.body
    }

    const admin = ADMIN.create({ data })
    let message = "l'agent a ete crée avec success";
    res.status(200).json({ 
        message : message,
        data : admin
    });
}

const getAll = async (req, res) => {
    const all = ADMIN.findAll({})
    let message = "Les agents";
    req.status(200).json({
        message : message,
        data : all
    });
}

const getfindId = async (req, res) => {
    let id = req.params.id;
    const getId = AMDIN.findOne({where : {id : id}})
    res.status(200).json({
        data : getId
    })
}

const updateId = async (res, req) => {
    let id = req.params.id
    const updatId = ADMIN.update({where : {id : id}})
    let message = "La modification a ete fait avec success"
    res.status(200).json({
        message : message
    })
}
const deleteId = async (req, res) => {
    let id = req.params.id
    const DeleteId = ADMIN.delete({ where : {id : id}})
    let message = "La suppresion a ete fait avec success"
    req.status(200).json({
        message : message
    })
}

module.exports = {
    addAdmin,
    getAll,
    getfindId,
    deleteId,
    updateId
}