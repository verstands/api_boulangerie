module.exports = (sequelize, Datetypes) => {
    const fonction = sequelize.define('fonction', {
        nomCFonc : {
            type : Datetypes.STRING
        }
    })

    return fonction
}