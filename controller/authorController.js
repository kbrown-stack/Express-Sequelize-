// This files creates all the functions we need for the author model.

const { where } = require("sequelize");
const db = require("../models");
const AuthorModel = db.authors;

// Get all Models as specified

const author = db.authors

// Adding the CRUD controller fuctions for the Author Models.

//GetAuthor
async function getAllAthors(req,res) {
    try {
        const authors = await author.findAll()
        res.status(200).json(aut)
    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
}