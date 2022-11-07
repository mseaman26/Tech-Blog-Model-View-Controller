const router = require('express').Router();

const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [{
                model: User,
            }]
        })
        
        const posts = dbPostData.map((post) => 
            post.get({ plain: true })
            
        )
        console.log(posts)
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        })
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})
// router.get('/', (req, res) => {
//     res.render('homepage', {
//         loggedIn: req.session.loggedIn
//     })
// })

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;
