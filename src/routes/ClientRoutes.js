const router =  require('express').Router()
const {store,getAll, getOne, destroy, update} = require('../controllers/clientController')

router.get('/',getAll);
router.get('/:clientId',getOne);
router.post('/',store);
router.put('/:clientId',update);
router.delete('/:clientId',destroy);


module.exports = router