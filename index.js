const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;

// server setup
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/check-colors", (req, res) => {
    console.log(req.body);
    res.send("API got the request & now we're checking the colors...");
});

const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});