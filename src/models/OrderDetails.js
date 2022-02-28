const OrderDetails = (sequelize, type) => {
    return sequelize.define('OrderDetails',{
        id:{
            autoIncrement: true,
            type: type.INTEGER,
            primaryKey: true
        },
        orderId: {
            type: type.INTEGER
        },
        productId: {
            type: type.STRING
        },
        price: {
            type: type.DECIMAL(10,2)
        }
    })
}

module.exports = OrderDetails