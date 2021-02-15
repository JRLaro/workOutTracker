const express = require("express");
const mongoose = require("mongoose")
const logger = require("morgan");

const PORT = process.env.PORT || 3030;

const uri = process.env.MONGODB_URI;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/htmlRoutes"))
app.use(require("./routes/apiRoutes"))


app.listen(PORT, () => {
console.log(`App running on http://localhost:${PORT}`);
});