const router = require('express').Router();
//Require the correct files from the models and authorizations

// router.get('/', withAuth, async (req, res) => {
//   //Create the correct asychronous get route for this function
//     const dummy = {test: 24, layout: 'dashboard'}
//     res.render("all-posts-admin", dummy);
// });

// router.get('/new', withAuth, (req, res) => {
//   // Create the correct get route
//   const dummy = {test: 24, layout: 'dashboard'}
//   res.render("new-post", dummy);
// });

// router.get('/edit/:id', withAuth, async (req, res) => {
//   // Create the correct get route functionality using an asychronous function
//   const dummy = {test: 24, layout: 'dashboard'}
//   res.render("all-posts-admin", dummy);
// });

router.get('/', (req, res) => {
  //Create the correct asychronous get route for this function
    const dummy = {test: 24, layout: 'dashboard'}
    res.render("all-posts-admin", dummy);
});

router.get('/new', (req, res) => {
  // Create the correct get route
  const dummy = {test: 24, layout: 'dashboard'}
  res.render("new-post", dummy);
});

router.get('/edit/:id', (req, res) => {
  // Create the correct get route functionality using an asychronous function
  const dummy = {test: 24, layout: 'dashboard'}
  res.render("edit-post", dummy);
});
module.exports = router;
