// make a request
function getColors(numColors) {
    // get colors from the API
    $.get(`https://api.noopschallenge.com/hexbot?count=${numColors}`, function(response) {
        console.log(response);
    });
}

getColors(1);
getColors(5);
getColors(100);