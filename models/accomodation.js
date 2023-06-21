const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Accomodation extends Model {}

Accomodation.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    accommodation_place: {
      type: DataTypes.STRING,
      defaultValue:"London",
      allowNull:false,
    },
    accommodation_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true,
           msg: "You must enter a name"}
    },},
    accommodation_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accommodation_filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    trending_id: {
      type: DataTypes.INTEGER,
      // references: {
      //     model: 'trending',
      //     key: 'id',
      // },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "accomodation",
  }
);

//EXPORT
module.exports = Accomodation;
