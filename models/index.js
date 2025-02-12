// This files that helps you access the and syn all models together.

const { Sequelize, DataTypes } = require('sequelize');

const CONFIG = require("../config/dbConfig")
require('dotenv').config();


const BookModel = require("./book")


const sequelize = new Sequelize(
    CONFIG.DB_NAME,
    CONFIG.DB_USER,
    CONFIG.DB_PASSWORD,
    {
        host: CONFIG.DB_HOST,
        dialect: CONFIG.DB_DIALECT
    });


sequelize.authenticate()
.then(() => {
    console.log("Connection was successful")
}) .catch((err) => {
    console.log(err)
})


const db = {};

db.sequelize = sequelize
db.Sequelize = Sequelize

// Adding our Book or initalizing book Models ....or sycning the models

db.books = require('./book')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(() => {
    console.log("Table for the model syc succesfully")
}) .catch((err) => {
    console.log(err)
})


module.exports = db