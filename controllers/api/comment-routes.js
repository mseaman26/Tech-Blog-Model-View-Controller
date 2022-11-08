const router = require('express').Router();
const { Comment } = require('../../models');
const dateFormat = require("../../utils/helpers.js")
//create new comment
router.post('/', async (req, res) => {
    try{
        const newComment = await Comment.create({
           user_id: req.session.user_id,
           post_id: req.session.post_id,
           body: req.body.body
        })
        req.session.save(() => {
            req.session.loggedIn = ture

            res.status(200).json(newComment)
        })
        
    }catch(err){
        console.log(err)
        res. status(500).json(err)
    }
})

module.exports = router