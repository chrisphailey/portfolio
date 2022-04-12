
const express = require("express");
const app = express();

const path = require("path");


// Handlebars templates
const exphbs = require("express-handlebars");
const hbs = exphbs.create();

// Set the handlebars engine
app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine)

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./controllers/index"));

const PORT = process.env.PORT || 3001;
// Make sure force: false when dev is done

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

  