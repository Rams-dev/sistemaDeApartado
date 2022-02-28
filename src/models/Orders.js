const Orders = (sequelize, type) => {
    return sequelize.define('Orders',{
        id:{
            autoIncrement: true,
            type: type.INTEGER,
            primaryKey: true
        },
        clientId: {
            type: type.INTEGER
        },
        PaymentDate: {
            type: type.DECIMAL(10,2)
        },
        isActive:{
            type: type.BOOLEAN(true)
        }
    })
}

module.exports = Orders