const router = require('express').Router();

const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    res.render('homepage')
})



module.exports = router;
