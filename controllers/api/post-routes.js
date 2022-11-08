const router = require('express').Router();
const { Post } = require('../../models');

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
            body: req.body.body
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