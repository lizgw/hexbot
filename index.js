const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;

// server setup
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

function checkColorOrder(data) {
    let statusObject = {
        result: "success",
        outOfOrder: []
    }

    switch(data.type) {
        case "hue":
            console.log("checking hue is TODO");
            break;
        case saturation:
            console.log("checking saturation is TODO");
            break;
        case "luminosity":
            console.log("checking luminosity is TODO");
            break;
    }

    return statusObject;
}

app.post("/check-colors", (req, res) => {
    console.log(req.body);

    let result = checkColorOrder(req.body);

    res.send(result);
});

const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});