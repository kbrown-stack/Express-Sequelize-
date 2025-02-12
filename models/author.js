// This files shows the Author models

const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
    const Author = sequelize.define('Author', {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        firstName: {
            DataTypes: String,
            allowNull: false,
        },

        lastName: {
            DataTypes: String,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
      allowNull: false, // This means email is required
      unique: true, // Ensure unique email addresses
      validate: {
        isEmail: true, // Validates format
        }
    },

    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true, // This is Optional field
      },
});

return Author
}