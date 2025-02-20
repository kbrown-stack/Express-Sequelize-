const express = require("express");
const bookController = require("../controller/bookController")
// const BookModel = require("../model/book")

const BookRouter = express.Router()

BookRouter.get("/", bookController.getAllBooks)  // This defines the mapping between functions and routes

// Rendring the get book as HTML template in the browser
// BookRouter.get("/", (req, res) => {
//     res.send(`
//         <h1>List of Books</h1>
//         <ul>
//             <li>Brown and Planning</li>
//             <li>Brown and Planning</li>

//         </ul>
//     `);
// });

BookRouter.post("/", bookController.addBook) 
BookRouter.put("/:id", bookController.updateBookById)
BookRouter.delete("/:id", bookController.deleteBookById) 



module.exports = BookRouter


