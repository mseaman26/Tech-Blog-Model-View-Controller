const router = require('express').Router();
const { User } = require('../../models');

//create new user
router.post('/', async (req, res) => {
    try{
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
      })

      req.session.save(() => {
        req.session.user_id = newUser.id
        req.session.loggedIn = true

        res.status(200).json(newUser)
      })
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

})
//log in
router.post('/login', async (req, res) => {
    try{
       
        const currentUser = await User.findOne({
            where: {
                username: req.body.username
            },
        }) 
        if (!currentUser){
            res.status(404).json("Login Failed.  Incorrect username and/or password")
            return
        }
        req.session.save(() => {
            req.session.user_id = currentUser.id
            req.session.loggedIn = true
            res.status(200).json({message: "Login Successful!"})
            console.log(req.session.user_id)
        })
    }catch(err){
        res.status(500).json(err)
    }
})

//logout
router.post('/logout', (req, res) => {
    console.log(req.session.loggedIn)
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;