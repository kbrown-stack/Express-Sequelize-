const express = require("express");
const bodyParser = require('body-parser');
const bookRouter = require("./routes/books")
require('dotenv').config();

const PORT = process.env.PORT || 3000;
// console.log("PORT from .env:", process.env.PORT);

const app = express();

app.use(bodyParser.json());

app.use("/books", bookRouter);

app.get('/', (req,res) => {
    res.send("Welcome to the Book API")
})

app.use((err, req, res, next) => {
console.log(err);
res.status(500).json({
    error: err.message
})
})


app.listen(PORT, () => {
    console.log(`Server started successfully on PORT: http://localhost:${PORT}`)
});