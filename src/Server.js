var getAllAnimals = require('./Controllers/AnimalController').Animals;
var getAnimalsByType = require('./Controllers/AnimalController').AnimalsByType;

const express = require('express');

const expressApp = express();

const PORT = 8080;

expressApp.listen(PORT, () => console.log('Express server currently listening on port ' + PORT));

expressApp.get('/animals', async (request, response) => {
  var resultAnimals = await getAllAnimals();
  console.log("Returning animals to api");
  response.json(resultAnimals); 
});

expressApp.get('/animalsByType', async (request, response) => {
    //console.log(request);
    var type = request.query.type;
    console.log(type);
    var resultAnimals = await getAnimalsByType(type);
    response.json(resultAnimals);
})
