module.exports = (sequelize, Datetypes) => {
    const client = sequelize.define('client', {
        nom : {
            type : Datetypes.STRING
        },
        postnom : {
            type : Datetypes.STRING
        },
        lieuN : {
            type : Datetypes.STRING
        },
        adresse : {
            type : Datetypes.STRING
        },
        telephone : {
            type : Datetypes.STRING
        },
    })

    return client
}