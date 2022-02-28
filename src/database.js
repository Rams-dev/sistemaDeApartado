const { Sequelize } = require('sequelize');
const Product = require('./models/Products');
const Client = require('./models/Clients');
const Order = require('./models/Orders');
const OrderDetail = require('./models/OrderDetails');
const Payment = require('./models/Payments');


const sequelize = new Sequelize('apartados', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


const Products = Product(sequelize, Sequelize)
const Clients = Client(sequelize, Sequelize)
const Orders = Order(sequelize, Sequelize)
const OrderDetails = OrderDetail(sequelize, Sequelize)
const Payments = Payment(sequelize, Sequelize)




sequelize.sync({force:false})
.then(() => {
    console.log("db connect")
})


module.exports = {
    Products,
    Clients,
    Orders,
    OrderDetails,
    Payments
}