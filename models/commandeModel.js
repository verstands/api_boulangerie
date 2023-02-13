module.exports = (sequelize, Datetypes) => {
    const commande = sequelize.define('commande', {
        idCommande : {
            type : Datetypes.STRING
        },
        nombrePain : {
            type : Datetypes.STRING
        },
        typePain : {
            type : Datetypes.STRING
        },
        prixTotal : {
            type : Datetypes.STRING
        },
        MontantEntreprise : {
            type : Datetypes.STRING
        },
        MontantCommision : {
            type : Datetypes.STRING
        },
        MontantGlobal : {
            type : Datetypes.STRING
        },
        status : {
            type : Datetypes.STRING
        },
    })

    return commande
}