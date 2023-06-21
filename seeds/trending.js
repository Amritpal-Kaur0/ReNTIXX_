
const { Trending } = require('../models');

const trendingData = [
  {
    trending_title: 'I am the title',
    trending_description: 'I am the description',
 
  },
  {
    trending_title: '',
    trending_description: '',
    
  },
  {
    trending_title: '',
    trending_description: '',

  },
  {
    trending_title: '',
    trending_description: '',
   
  },
  {
    trending_title: '',
    trending_description: '',
   
  },

];

const seedTrending = () => Trending.bulkCreate(trendingData);

module.exports = seedTrending;