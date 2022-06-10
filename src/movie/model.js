const mongoose = require("mongoose");

//Creating a schema which should be called what the model will be called + Schema (modelSchema)
//Schema is class construction
const movieSchema = new mongoose.Schema({
  //Defining key value pair "title"
  title: {
    type: String, //It wouldn't work if the title is integer for instance
    unique: true, //No more than one of the same movie title can exist in the database
    required: true //It must be provided
  },
  //Defining key value pair "actor"
  actor: {
    type: String, //It wouldn't work if the title is integer for instance
    default: "Not Specified" //If not provided will be saved in the database as "Not Specified"
  }
});

//Giving our schema to a model
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;