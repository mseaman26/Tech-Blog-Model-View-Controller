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
module.exports = router