const Payments = (sequelize, type) => {
    return sequelize.define('Payments',{
        id:{
            autoIncrement: true,
            type: type.INTEGER,
            primaryKey: true
        },
        orderId: {
            type: type.INTEGER
        },
        clientId: {
            type: type.STRING
        },
        amount: {
            type: type.DECIMAL(10,2)
        }
    })
}

module.exports = Payments