//IMPORT EXPRESS AND MODELS
const router = require('express').Router();
const withAuth = require('../utils/auth');
const sequelize = require("../config/connection")
const { Accomodation, Transportation, Trending, Catering } = require('../models');

router.get("/",(req,res)=>{
  res.render("homepage",{
    loggedIn: req.session.loggedIn,
   
  })
})

router.get("/uploadTran",(req,res)=>{
  res.render("uploadTran")
})

router.get("/uploadAcc",(req,res)=>{
  res.render("uploadAcc")
})

router.get('/product', async (req, res) => {
  res.render('product');
});

router.get("/Contact",   (req, res) => {
  res.render("Contact")
})

//login page
router.get('/Login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }



  res.render('login');
});



module.exports = router;





















// //CREATE
// router.post('/', (req, res) => {
//   // create a new trending
//   Trending.create(req.body)
//   .then(trendingData => res.json(trendingData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

// // UPDATE
// router.put('/:id', (req, res) => {
//   // update a trending by its `id` value
//   Trending.update(
//     {
//       trending_name: req.body.trending_name
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(trendingData => {
//       if (!trendingData) {
//         res.status(404).json({ message: 'No trending found with this id' });
//         return;
//       }
//       res.json(trendingData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //DELETE
// router.delete('/:id', (req, res) => {
//   // delete a trending by its `id` value
//   Trending.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(trendingData => {
//     if (!trendingData) {
//       res.status(404).json({ message: 'No trending items with this id' });
//       return;
//     }
//     res.json(trendingData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

//EXPORT

