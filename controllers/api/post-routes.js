const { Post } = require('../../models');
const withAuth = require('../../utils/auth.js');

const router = require('express').Router();
//Require the correct files from the models and authorizations

router.post('/', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
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

router.put('/:id', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
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

router.delete('/:id', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
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
