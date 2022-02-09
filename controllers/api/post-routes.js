const { Post } = require('../../models');
// Used to check if the User is logged in.
const withAuth = require('../../utils/auth.js');

const router = require('express').Router();

// Creates a post, with the user linked via ID.
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id
    });
    //console.log(postData);
    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json("Could not make post.")
  }
});

// Update's post information.
router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = Post.update({
      title: req.body.title,
      body: req.body.body,
    },{
      where:{
        id: req.params.id
      }
    });
    
    if(!postData){
      res.status(400).json("Could not find post!");
      return;
    }

    res.status(200).json("postData");
  } catch (error) {
    res.status(400).json("Could not make post.")
  }
});

// Removes posts.
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = Post.destroy({
      where:{
        id: req.params.id
      }
    });

    if(!postData){
      res.status(400).json("Could not find post!");
      return;
    }

    res.status(200).json("postData");
  } catch (error) {
    res.status(400).json("Could not make post.")
  }
});

module.exports = router;
