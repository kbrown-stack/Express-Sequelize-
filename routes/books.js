const express = require("express");
const bookController = require("../controller/bookController")
// const BookModel = require("../model/book")

const BookRouter = express.Router()

BookRouter.get("/", bookController.getAllBooks)  // This defines the mapping between functions and routes
BookRouter.post("/", bookController.addBook) 
BookRouter.put("/:id", bookController.updateBookById)
BookRouter.delete("/:id", bookController.deleteBookById) 



module.exports = BookRouter