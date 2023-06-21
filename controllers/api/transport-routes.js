//IMPORT EXPRESS AND MODELS
const router = require('express').Router();

const { Accomodation,Transportation,Trending, Catering } = require('../../models');

// THE CATERING ENDPOINTS
router.get('/',async (req, res) => {
    
    try{
      const transportationdata= await Transportation.findAll()
    // serialize Data
    const transport =transportationdata.map((transportation)=>transportation.get({plain:true}));
  
    res.render('transportation',{
     transport,
      // username: req.session.username,
      //   logged_in: req.session.logged_in
    })
  }catch(err) {
      console.log(err);
      res.status(500).json(err);
    }});


    router.get('/:id',async (req, res) => {
      // find one transportation  by its `id` value
      try{
       const transport =await Transportation.findByPk(req.params.id,{
      
      });
    
          const transportserial =transport.get({plain:true})
    console.log(transportserial)
      res.render('transportation',{
        transportserial,
    
        // username: req.session.username,
        // logged_in: req.session.logged_in
      })
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
      }});
    
      router.post('/',  async (req, res) => {
        try {
      
          const newvehicle = await Transportation.create({
            transportation_name: req.body.transportation_name,
            transportation_description: req.body. transportation_description,
            capacity: req.body.capacity,
            price:req.body.price,
            filename:req.body.filename,
            trending_id:req.body.trending_id
          });
      
          res.status(200).json(newvehicle);
        } catch (err) {
          res.status(400).json(err);
        }
      });
    
    //EXPORT
module.exports = router;