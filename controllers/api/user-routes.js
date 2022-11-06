const router = require('express').Router();
const { User } = require('../../models');

//create new user
router.post('/', async (req, res) => {
    try{
        console.log(req.body.email)
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })

      req.session.save(() => {
        req.session.loggedIn = true

        res.status(200).json(newUser)
      })
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

})

router.post('/login', async (req, res) => {
    try{
       
        const currentUser = await User.findOne({
            where: {
                email: req.body.email
            },
        }) 
        if (!currentUser){
            res.status(404).json("Login Failed.  Incorrect username and/or password")
            return
        }
        req.session.save(() => {
            req.session.loggedIn = true
            res.status(200).json.apply({message: "Login Successful!"})
        })
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;