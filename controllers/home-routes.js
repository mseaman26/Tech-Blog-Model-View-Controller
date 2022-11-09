const router = require('express').Router();

const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
//show all posts
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

//login
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
//view single post 
router.get('/post/:id', withAuth, async (req, res) => {
    const dbPost = await Post.findByPk(req.params.id,{
        include: [{
            model: User

        }]
    })
    req.session.post_id = req.params.id
    const post = dbPost.get({ plain: true })
    const dbPostComments = await Comment.findAll({
        
        where: {
            post_id: req.session.post_id,
        },
        include: [{
            model: User
        }]
    })

    const postComments = dbPostComments.map((post) => 
            post.get({ plain: true }))
    res.render('post', {
        post: post,
        postComments: postComments
    })
})
//edit post
router.get('/posts/edit/:id', withAuth, async (req, res) => {
    const dbEditPost = await Post.findByPk(req.params.id, {
    })
    req.session.post_id = req.params.id
    const editPost = await dbEditPost.get({plain: true})
    res.render('edit-post', editPost)
})
module.exports = router;
//update post
router.put('/post/:id', withAuth, async (req, res) => {
    try{
        req.session.post_id = req.params.id
        const dbUpdatePost = await Post.findByPk(req.params.id) ({})
        dbUpdatePost.update({
            title: req.body.title,
            body: req.body.body
        })
    }catch(err){
        console.log(err)
    }
    
})