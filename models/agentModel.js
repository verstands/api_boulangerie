module.exports = (sequelize, Datetypes) => {
    const agent = sequelize.define('agent', {
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

    return agent
}