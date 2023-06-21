const Accomodation = require('./accomodation');
const Transportation = require('./transportation');
const Catering = require('./catering');
const Trending = require('./Trending');


// Trending.hasMany(Transportation, { 
//     foreignKey: 'trending_id',
//     onDelete: 'CASCADE'
// });
// Transportation.belongsTo(Trending, {
//     foreignKey: 'trending_id',
//     onDelete: 'CASCADE'
// });
// Trending.hasMany(Catering, { 
//     foreignKey: 'trending_id',
//     onDelete: 'CASCADE'
// });  
// Catering.belongsTo(Trending, {
//     foreignKey: 'trending_id',
//     onDelete: 'CASCADE'
// });
// Trending.hasMany(Accomodation, { 
//     foreignKey: 'trending_id',
//     // onDelete: 'CASCADE'
// });
// Accomodation.belongsTo(Trending,{
//     foreignKey: 'trending_id',
//     onDelete: 'CASCADE'
// });

module.exports = { Accomodation, Transportation, Catering, Trending };
