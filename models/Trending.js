const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Trending extends Model { }

Trending.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        trending_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trending_description:
        {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trending',
    }
);

//EXPORT
module.exports = Trending;
