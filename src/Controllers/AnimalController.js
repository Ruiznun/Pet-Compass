var animal = require('../Models/Animal');
var db = require('../db.js');

async function Animals(){
    
    var animals = db.queryDb("Select * FROM animals").then(function() {
        console.log("Animals query succeeded");
        console.log(animals);
        return animals;
    }, function() {
        console.log("Animals query failed");
        return null;
    });
    
   //var animals = await db.queryDb("Select * FROM animals");
   //console.log(animals);
   return null;

};

//TODO: Change a.name to actual type. Create "species" column in DB
async function AnimalsByType(type){
    var animals = await db.queryDb("SELECT * FROM animals a WHERE a.species =" + type);
    return animals;
}

module.exports = {
    Animals,
    AnimalsByType
}