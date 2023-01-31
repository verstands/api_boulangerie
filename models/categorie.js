module.exports = (sequelize, Datetypes) => {
    const categorie = sequelize.define('categorie', {
        nomCat : {
            type : Datetypes.STRING
        }
    })

    return categorie
}