const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");

const randomBooksRouter = require("./routes/random.books.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/getBooks', randomBooksRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});