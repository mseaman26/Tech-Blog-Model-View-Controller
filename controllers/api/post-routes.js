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

router.post('/', async (req, res) => {
    try{
        const newPost = await Post.create({
            user_id: req.session.user_id,
            title: req.body.title,
            body: req.body.body,
            
        })
        res.status(200).json(newPost)

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router