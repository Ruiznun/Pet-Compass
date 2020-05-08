var getAllAnimals = require('./Controllers/AnimalController').Animals;
var getAnimalsByType = require('./Controllers/AnimalController').AnimalsByType;
const https = require('https');
const fs = require('fs');

var key = fs.readFileSync('../../ssl/apache-selfsigned.key');
var cert = fs.readFileSync('../../ssl/apache-selfsigned.crt');
var options = {
  key: key,
  cert: cert
};



const express = require('express');

const expressApp = express();

var server = https.createServer(options, expressApp);

const PORT = 8080;
const HTTPSPORT = 8043;

expressApp.listen(PORT, () => console.log('Express server currently listening on port ' + PORT));
server.listen(HTTPSPORT, () => {console.log('HTTPS express starting on port : ' + HTTPSPORT)
});

const anyAnimals = async function (request, response) {
  var resultAnimals = await getAllAnimals();
  console.log("Returning animals to api");
  response.json(resultAnimals); 
}

expressApp.get('/animals', anyAnimals);


expressApp.get('/animalsByType', async function(request, response) {
    //console.log(request);
    var type = request.query.type;
    console.log(type);
    var resultAnimals = await getAnimalsByType(type);
    response.json(resultAnimals);
});



