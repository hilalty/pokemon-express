require("dotenv").config();

/**
 * Requirements
 */
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");

/**
 * Configuration
 */
const PORT = 3000;

/**
 * Controllers
 */
// Our controller will eventually go here!

//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

/**
 * Middleware
 */

//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));


// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());


// Basic index route!
app.get("/", (req, res) => {
  res.send("Poke Ball is ready!");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});