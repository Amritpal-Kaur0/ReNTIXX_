const User = require("../models/users")


const userData= [
    {
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
      },
      {
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123'
      },
]


const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers