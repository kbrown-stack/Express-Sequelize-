// This files creates all the functions we need for the book model.

// const BookModel = require("../models/book")
const { where } = require("sequelize");
const db = require("../models");
const BookModel = db.books;

// Get Models

const book = db.books

// Adding the CRUD controller fuctions Book Model

//GetBooks
async function getAllBooks(req,res) {
    try {
        const books = await book.findAll()
        res.status(200).json(books)
    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// Add Books
async function addBook(req,res) {
    const bookInfo = req.body
    try  {
    const book = await BookModel.create(bookInfo)
    res.status(200).json({
        message: "Book added successfull",
        data: book
    })
} catch(error) {
    console.log(error)
    res.status(500).send(error)
}
}

//Update Books

async function updateBookById(req,res) {
    const bookId = req.params.id; // Getting the book by the requested paramenter.
    const bookUpdateInfo = req.body // getting the field to update from

    // find book first before updating it. 
    try{
        const book = await BookModel.update(bookUpdateInfo, {
            where: {
                id: bookId
            }
        });
        res.status(200).json({ message: "Book updated successfully",
            data: book
         });
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}

// Delete Books

async function deleteBookById(req,res) {
    const bookId = req.params.id; // Getting the deleted book by the requested paramenter.


    // find book first before updating it. 
    try{
        const book = await BookModel.destroy({
            where: {
                id: bookId
            }
        });
        res.status(200).json({ message: "Book deleted successfully"
         });
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}





module.exports = {
    getAllBooks,
    addBook,
    updateBookById,
    deleteBookById
}