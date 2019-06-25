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
            let hues = [];
            let sortedHues = [];
            // make lists of the hues
            for (let i = 0; i < data.colors.length; i++) {
                let hue = Color(data.colors[i]).hue();
                hues[i] = hue;
                sortedHues[i] = hue;
            }

            // now sort one of the lists
            sortedHues.sort((a, b) => {
                if (a < b)
                    return -1
                else if (a > b)
                    return 1
                else
                    return 0
            });

            // check each value in the user's submission
            // if there's a mismatch, push that to the status object
            for (let i = 0; i < hues.length; i++)
            {
                if (hues[i] != sortedHues[i]) {
                    statusObject.outOfOrder.push(i);
                    statusObject.result = "failure";
                }
            }
            break;
        case "saturation":
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