//IMPORT EXPRESS AND MODELS
const router = require('express').Router();
const emoji = require ('node-emoji');


const { Accomodation,Transportation,Trending, Catering } = require('../../models');

// THE CATERING ENDPOINTS
router.get('/',async (req, res) => {
    
    try{
      const Accomodata= await Accomodation.findAll({
      include: [ 
        // {
        //   model: Catering
        // },
        // {
        //   model: Transportation
        // },
        // {
        //   model: Accomodation
        // },
      ]
    })
    // serialize Data
    const Accomodationserial =Accomodata.map((Accomodationinfo)=>Accomodationinfo.get({plain:true}));
    let gg =emoji.get('dollar')
    res.render('accomodation',{
     Accomodationserial,gg
      // username: req.session.username,
      //   logged_in: req.session.logged_in
    })
  }catch(err) {
      console.log(err);
      res.status(500).json(err);
    }});


    router.get('/:id',async (req, res) => {
      // find one accomodation  by its `id` value
      try{
       const Accomodata = await Accomodation.findByPk(req.params.id,{
      
      });

      let gg =emoji.get('dollar')

let ll = emoji.get("house")



      console.log(gg)
    const accomodationserial =Accomodata.get({plain:true})
    // console.log(accomodationserial)

      res.render('accomodation',{
        accomodationserial,gg,ll 
    
        // username: req.session.username,
        // logged_in: req.session.logged_in
      })
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
      }});
    
 router.post('/',  async (req, res) => {
        
      try{
          const newplace = await Accomodation.create({
            accommodation_place:req.body.accommodation_place,
            accommodation_description:req.body.accommodation_description ,
            accommodation_location:req.body.accommodation_location,
            accommodation_filename:req.body.accommodation_filename,
            price:req.body.price ,
            trending_id:req.body.trending_id,
          })
      
          //  const place =newplace.get({
          //   plain:true})
      
          res.status(200).json(newplace);
        } catch (err) {
          res.status(400).json(err);
        }
      });

      
    //EXPORT
module.exports = router;