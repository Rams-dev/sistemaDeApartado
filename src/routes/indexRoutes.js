const router =  require('express').Router()

router.get("/",(req, res)=> {
    res.send("hehe")


});

module.exports = router