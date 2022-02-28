const router =  require('express').Router()
const {store,getAll, getOne, destroy, update} = require('../controllers/ProductController')

router.get('/',getAll);
router.get('/:productId',getOne);
router.post('/',store);
router.put('/:productId',update);
router.delete('/:productId',destroy);


module.exports = router