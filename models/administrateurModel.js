module.exports = (sequelize, Datetypes) => {
    const Administrateur = sequelize.define('administration', {
        nom : {
            type : Datetypes.STRING
        },
        postnom : {
            type : Datetypes.STRING
        },
        email : {
            type : Datetypes.STRING
        },
        adresse : {
            type : Datetypes.STRING
        },
        password : {
            type : Datetypes.STRING
        },
    })

    return Administrateur
}