const db  = require('../models')
const ADMIN = db.commande


const addAdmin = async (req, res) => {
    let data = {
        idCommande : req.body.idCommande,
        nombrePain : req.body.nombrePain,
        typePain : req.body.typePain,
        prixTotal : req.body.prixTotal,
        MontantEntreprise : req.body.MontantEntreprise,
        MontantCommision : req.body.MontantCommision,
        MontantGlobal : req.body.MontantGlobal,
        status : 0
    }

    const admin = await ADMIN.create(data)
    let message = "la commande a ete affectuée avec succes !";
    res.status(200).json({ 
        message,
        data : admin
    });
}
const Depot = async (req, res) => {
    let message = "Les commandes"
    const data = await ADMIN.findAll({ where : {status : 0}})
    res.status(200).json({message, data})
}
const Retrait = async (req, res) => {
    let message = "Les commandes"
    const data = await ADMIN.findAll({ where : {status : 1}})
    res.status(200).json({message, data})
}

const deleteId = async (req, res) => {
    let id = req.params.id
    const DeleteId = await ADMIN.destroy({ where : {id : id}})
    let message = "La suppresion a ete fait avec success"
    res.status(200).json({
        message : message
    })
}

const countToday = async (req, res) => {
    const countToday = await ADMIN.count({ where : {status : 1}})
    res.status(200).json({data : countToday})
}

module.exports = {
    Depot,
    Retrait,
    deleteId,
    addAdmin,
    countToday
}