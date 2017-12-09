// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var goodPORT = 7000;
var badPORT = 7500;
// Create a generic function to handle requests and responses
function handleRequestGood(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Good Job! You Did Great!" + request.url);
}

function handleRequestBad(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Stop... Just Stop.." + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var goodServer = http.createServer(handleRequestGood);
var badServer = http.createServer(handleRequestBad);


// Start our server so that it can begin listening to client requests.
goodServer.listen(goodPORT, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + goodPORT);
});

badServer.listen(badPORT, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + badPORT);
});