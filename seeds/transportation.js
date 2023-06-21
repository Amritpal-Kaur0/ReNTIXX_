
const { Transportation} = require('../models');

const transportationData = [
  {
    transportation_name: "Maserati GranTurismo",
    transportation_description: "A stylish and elegant luxury sedan for comfortable and luxurious transportation.",
    capacity: 4,
    price: 750,

    trending_id: 1,
    filename:"mazarati.jpg"
 
  },
  {
    transportation_name: "Stretch Limousine",
    transportation_description: "A luxurious and spacious stretch limousine with plush interiors and entertainment options.",
    capacity: 10,
    price: 2500,
      trending_id: 2,
      filename:"limo.jpg"
  },
 
  {
    transportation_name: "Party Bus",
    transportation_description: "A party bus equipped with dance floors, music systems, and party lighting for a fun and memorable experience.",
    capacity: 20,
    price: 4000,
      trending_id: 4,

      filename:"party Bus.jpg"
  },
  
 
  {
    transportation_name: "Ferrari",
    transportation_description: "A sleek and high-performance sports car that delivers an exhilarating driving experience.",
    capacity: 2,
    price: 1100,
      trending_id: 7,
      filename:"Ferrari.jpg"
  },
  
  {
    transportation_name: "Lamborghini",
    transportation_description: "A stylish and convertible car that lets you enjoy the open road and the wind in your hair.",
    capacity: 2,
    price: 2250,
      trending_id: 11,
      filename:"Lambo.jpg"
  },
  {
    transportation_name: "Airport Shuttle",
    transportation_description: "A reliable and convenient airport shuttle service for seamless transportation to and from the airport.",
    capacity: 12,
    price: 900,
      trending_id: 12,
      filename:"Shuttle.jpg"
  },
 

  {
    transportation_name: "Hummer ",
    transportation_description: "A massive and extravagant Hummer limousine with a VIP party atmosphere and luxurious amenities.",
    capacity: 16,
    price: 2200,
      trending_id: 15,
      filename:"hummer.jpg"
  },
  {
    transportation_name: "Tesla C Class",
    transportation_description: "An eco-friendly electric car that combines sustainability with modern design and technology.",
    capacity: 4,
    price: 1150,
      trending_id: 16,
      filename:"tesla.jpg"
  },



]


const seedTransportation = () => Transportation.bulkCreate(transportationData);

module.exports = seedTransportation;