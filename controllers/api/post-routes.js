const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const dateFormat = require("../../utils/helpers.js")
const withAuth = require('../../utils/auth');

//get all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.findAll({

        })
        if(!posts){
            res.status(404).json({ message: "no posts found"})
            return
        }
        res.status(200).json(posts)
    }catch (err){
        res.status(500).json(err)
    }
    
})

//create new post

router.post ('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id
            
           
        })
        req.session.save(() => {
            req.session.loggedIn = true
            
            res.status(200).json(newPost)
        })
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})
module.exports = router
//view single post 
router.get('/:id', withAuth, async (req, res) => {
    try{
        const dbPost = await Post.findByPk(req.params.id,{
            include: [{
                model: User,
                model: Comment
            }]
        })
        req.session.post_id = req.params.id
        const post = dbPost.get({ plain: true })
        res.status(200).json(post)
    }catch(err){
        console.log(err)
    }
})
//updat post
router.put('/:id', withAuth, async (req, res) => {
    try{
        req.session.post_id = req.params.id
        const dbUpdatePost = await Post.findByPk(req.params.id, ({}))
        dbUpdatePost.update({
            title: req.body.title,
            body: req.body.body
        })
        res.status(200).json(dbUpdatePost)
    }catch(err){
        console.log(err)
    }
})
//delete post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dbDeletePost = await Post.findByPk(req.params.id, ({}))
        dbDeletePost.destroy({})
        res.status(200).json({message: "post deleted"})
    }catch(err){
        console.log(err)
    }
})