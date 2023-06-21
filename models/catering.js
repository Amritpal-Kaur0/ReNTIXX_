const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Catering extends Model { }
Catering.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        dish_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dish_description:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        menu: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        filename: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        trending_id: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: 'trending',
            //     key: 'id',
            // },
    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'catering',
    }

);

//EXPORT
module.exports = Catering;
