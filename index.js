const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const Color = require("Color");

// server setup
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

function checkColorOrder(data) {
    var statusObject = {
        result: "success",
        outOfOrder: []
    }

    switch(data.type) {
        case "hue":
            for (var i = 0; i < data.colors.length - 1; i++)
            {
                // get values to compare
                let colorValue = data.colors[i];
                let nextColorValue = data.colors[i + 1];

                // make colors
                let hue1 = Color(colorValue).hue();
                let hue2 = Color(nextColorValue).hue();

                // if they're out of order, save the indexes
                if (hue1 > hue2)
                {
                    // TODO: check that hue 2 isn't already in there
                    statusObject.outOfOrder.push(i, i + 1);
                    statusObject.result = "failure";
                }
            }
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
    let result = checkColorOrder(req.body);
    res.send(result);
});

const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});