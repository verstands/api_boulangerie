const db  = require('../models')
const ADMIN = db.produits

const addAdmin = async (req, res) => {
    let data = {
        nom : req.nom.body,
        nomProduit : req.nomProduit.body,
        prix : req.prix.body,
        idcat : req.idcat.body,
    }

    const admin = await ADMIN.create(data)
    let message = "le produit a ete crée avec success";
    res.status(200).json({ 
        message : message,
        data : admin
    });
}

const getAll = async (req, res) => {
    const all = await ADMIN.findAll({})
    let message = "Les produits";
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

module.exports = {
    addAdmin,
    getAll,
    getfindId,
    deleteId,
    updateId
}