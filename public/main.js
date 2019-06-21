let playerLevel = 1;

const checkButton = document.getElementById("check-button");
checkButton.addEventListener("click", checkSorting);

// make a request
function setupLevel(levelNum) {
    // figure out how many colors to get
    let numColors = calculateNumColors(levelNum);

    // get colors from the API
    $.get(`https://api.noopschallenge.com/hexbot?count=${numColors}`, function(response) {
        // build the html level for the colors
        setupLayout(response.colors);
    });
}

// calculate the number of colors to use based on the player's current level
function calculateNumColors(level) {
    return level * 3;
}

function setupLayout(colorArray) {
    // make a color-box for each color
    for (let color of colorArray) {
        let box = document.createElement("div");
        box.classList.add("color-box");
        box.style.background = color.value;
        $("#game-canvas").append(box);
    }

    // make 'em sortable!
    $("#game-canvas").sortable({
        tolerance: "pointer",
        placeholder: "color-box-placeholder"
    });
}

function checkSorting() {
    // package up the current color order to check
    let colorData = {
        type: "hue",
        colors: [
            "#ffffff",
            "#fefefef"
        ]
    }
    // request to the api
    $.ajax({
        type: "POST",
        url: "/check-colors",
        data: JSON.stringify(colorData),
        contentType: "application/json",
        success: (response) => {
            console.log(response);
        }
    });
}

// build a game based on the player's current level
setupLevel(playerLevel);