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
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        })
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})


router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/dashboard',withAuth, async(req, res) => {
    const dbMyPosts = await Post.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    const myPosts = dbMyPosts.map((post) => 
    post.get({ plain: true }) 
)
    
    res.render('dashboard', {
        myPosts: myPosts,
        loggedIn: req.session.loggedIn
    })
})
router.get('/create-post', withAuth, (req, res) => {
    res.render('create-post', {
        loggedIn: req.session.loggedIn
    })
})

router.get('/post/:id', withAuth, async (req, res) => {
    const dbPost = await Post.findByPk(req.params.id,{
        include: [{
            model: User,
        }]
    })
    const post = dbPost.get({ plain: true })
    console.log(post)
    res.render('post', post )
})
module.exports = router;
