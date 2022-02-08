const router = require('express').Router();
//Require the correct files from the models
const { Post, Comment, User } = require('../../models');


router.post('/', async (req, res) => {
  // Create the correct asychronous function for this login post request with error handling
  try {
    const UserData = await User.create(req.body);
    res.status(200).json(UserData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  // Create the correct asychronous function for this login post request with error handling
  try{
    const userData = await User.findOne({where: {username: req.body.username}});

    if(!userData){
      res.status(400).json({message: 'Invalid Username!'});
      console.log('Invalid Username!');
      return;
    }

    const validPassword = await userData.verifyPassword(req.body.password);

    if(!validPassword){
      res.status(400).json({message: 'Invalid Password!'});
      console.log('Invalid Password!');
      return;
    }

    req.session.save(function() {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      console.log(req.session.loggedIn);
      res.status(200).json(userData);
    });
    console.log(req.session.loggedIn);
  }catch(err){
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  // Create the correct functionality for this post request with error handling
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
