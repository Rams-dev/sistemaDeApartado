const Product = (sequelize, type) => {
    return sequelize.define('Product',{
        id:{
            autoIncrement: true,
            type: type.INTEGER,
            primaryKey: true
        },
        name: {
            type: type.STRING
        },
        category: {
            type: type.STRING
        },
        price: {
            type: type.DECIMAL(10,2)
        },
        isActive:{
            type: type.BOOLEAN(true),
            defaultValue: 1
        }

    });
}

module.exports = Product