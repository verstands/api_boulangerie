module.exports = (sequelize, Datetypes) => {
    const produit = sequelize.define('produuit', {
        nom : {
            type : Datetypes.STRING
        },
        nomProduit : {
            type : Datetypes.STRING
        },
        prix : {
            type : Datetypes.STRING
        },
        idcat : {
            type : Datetypes.STRING
        }
    })

    return produit
}