const Client = (sequelize, type) => {
    return sequelize.define('Client',{
        id:{
            autoIncrement: true,
            type: type.INTEGER,
            primaryKey: true
        },
        name: {
            type: type.STRING
        },
        numberPhone: {
            type: type.STRING
        },
        address: {
            type: type.STRING
        },
        isActive:{
            type: type.BOOLEAN(true),
            defaultValue: 1
        }
    })
}

module.exports = Client