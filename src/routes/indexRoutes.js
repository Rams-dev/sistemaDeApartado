const router =  require('express').Router()
const ProductRoutes = require('./ProductsRoutes')
const ClientRoutes = require('./ClientRoutes')

router.use('/products',ProductRoutes)
router.use('/clients',ClientRoutes)

module.exports = router 