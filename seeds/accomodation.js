
const { Accomodation } = require('../models');

const accomodationData =
  [
    {
      accommodation_place: "Cozy Cottage",
      accommodation_description: "A charming cottage surrounded by nature, perfect for a peaceful getaway.",
      accommodation_location: "Forestville, California",
      accommodation_filename: "cozy_cottage.jpeg",
      price: 1200,
      trending_id:2,
    },
    {
      accommodation_place: "Luxury Villa",
      accommodation_description: "A stunning villa with breathtaking ocean views, ideal for a luxurious vacation.",
      accommodation_location: "Maui, Hawaii",
      accommodation_filename: "luxury_villa.jpeg",
      price: 5000
    },
    {
      accommodation_place: "Modern Apartment",
      accommodation_description: "A sleek and stylish apartment in the heart of the city, close to all amenities.",
      accommodation_location: "New York City, New York",
      accommodation_filename: "modern_apartment.jpeg",
      price: 2000,
      trending_id:2,
    },
    {
      accommodation_place: "Rustic Cabin",
      accommodation_description: "A cozy cabin nestled in the mountains, offering a rustic and serene retreat.",
      accommodation_location: "Asheville, North Carolina",
      accommodation_filename: "rustic_cabin.jpeg",
      price: 1500
    },
    {
      accommodation_place: "Beachfront Bungalow",
      accommodation_description: "A charming bungalow just steps away from the sandy beach, perfect for relaxation.",
      accommodation_location: "Bali, Indonesia",
      accommodation_filename: "beachfront_bungalow.jpeg",
      price: 3000
    },
    {
      accommodation_place: "Country Farmhouse",
      accommodation_description: "A picturesque farmhouse surrounded by rolling hills and farmland, ideal for a countryside escape.",
      accommodation_location: "Tuscany, Italy",
      accommodation_filename: "country_farmhouse.jpeg",
      price: 2500
    },
    {
      accommodation_place: "Urban Loft",
      accommodation_description: "A trendy loft apartment in a vibrant neighborhood, with modern amenities and city views.",
      accommodation_location: "Berlin, Germany",
      accommodation_filename: "urban_loft.jpeg",
      price: 1800
    },
    {
      accommodation_place: "Mountain Chalet",
      accommodation_description: "A charming chalet tucked away in the mountains, offering breathtaking views and outdoor adventures.",
      accommodation_location: "Whistler, British Columbia",
      accommodation_filename: "mountain_chalet.jpeg",
      price: 3500
    },
    {
      accommodation_place: "Seaside Cottage",
      accommodation_description: "A quaint cottage by the sea, providing a peaceful and idyllic coastal getaway.",
      accommodation_location: "Cornwall, United Kingdom",
      accommodation_filename: "seaside_cottage.jpeg",
      price: 1200
    },
    {
      accommodation_place: "Historic Townhouse",
      accommodation_description: "A beautifully restored townhouse with rich history, located in a charming historic district.",
      accommodation_location: "Charleston, South Carolina",
      accommodation_filename: "historic_townhouse.jpeg",
      price: 2800
    },
    {
      accommodation_place: "Ski Resort Condo",
      accommodation_description: "A cozy condo nestled within a ski resort, offering convenient access to slopes and winter activities.",
      accommodation_location: "Aspen, Colorado",
      accommodation_filename: "ski_resort_condo.jpeg",
      price: 4000
    },
    {
      accommodation_place: "Lakeview Retreat",
      accommodation_description: "A peaceful retreat overlooking a serene lake, perfect for nature lovers and relaxation.",
      accommodation_location: "Lake District, United Kingdom",
      accommodation_filename: "lakeview_retreat.jpeg",
      price: 1800
    },
    {
      accommodation_place: "City Penthouse",
      accommodation_description: "A luxurious penthouse in the heart of the city, featuring stunning skyline views and upscale amenities.",
      accommodation_location: "Sydney, Australia",
      accommodation_filename: "city_penthouse.webp",
      price: 8000
    },
    {
      accommodation_place: "Countryside Villa",
      accommodation_description: "A charming villa surrounded by picturesque countryside, offering tranquility and natural beauty.",
      accommodation_location: "Provence, France",
      accommodation_filename: "countryside_villa.jpeg",
      price: 3000
    },
    {
      accommodation_place: "Tropical Resort",
      accommodation_description: "A tropical paradise resort with palm-fringed beaches and crystal-clear waters, perfect for a dream vacation.",
      accommodation_location: "Maldives",
      accommodation_filename: "tropical_resort.jpeg",
      price: 7000
    },
    {
      accommodation_place: "Historic Castle",
      accommodation_description: "An enchanting castle with centuries of history, providing a unique and regal experience.",
      accommodation_location: "Edinburgh, Scotland",
      accommodation_filename: "historic_castle.jpeg",
      price: 4000
    },
    {
      accommodation_place: "Desert Retreat",
      accommodation_description: "A secluded retreat in the middle of the desert, offering serenity and breathtaking sunsets.",
      accommodation_location: "Sedona, Arizona",
      accommodation_filename: "desert_retreat.jpeg",
      price: 2000
    },
    {
      accommodation_place: "Lakefront Cabin",
      accommodation_description: "A cozy cabin nestled on the shores of a peaceful lake, perfect for fishing and relaxation.",
      accommodation_location: "Lake Tahoe, California",
      accommodation_filename: "lakefront_cabin.jpeg",
      price: 2500
    },
    {
      accommodation_place: "Treehouse Getaway",
      accommodation_description: "A unique treehouse retreat surrounded by lush forests, providing a magical and adventurous escape.",
      accommodation_location: "British Columbia, Canada",
      accommodation_filename: "treehouse_getaway.jpeg",
      price: 1800,
      trending_id:2,
      price: 1800

    },
    {
      accommodation_place: "Safari Lodge",
      accommodation_description: "A luxurious lodge in the heart of the savannah, offering thrilling wildlife encounters and unforgettable safaris.",
      accommodation_location: "Masai Mara, Kenya",
      accommodation_filename: "safari_lodge.jpeg",
      price: 5000
    }
  ]


const seedAccomodation = () => Accomodation.bulkCreate(accomodationData);

module.exports = seedAccomodation;