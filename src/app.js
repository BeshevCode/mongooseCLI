require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { addMovie, findMovies, updateMovie, deleteMovie } = require("./movie/functions");

//Creating our app asynchronous function 
const app = async (yargsObj) => {
    if (yargsObj.add) {
      //Add movie to database from yargs input
      await addMovie({title: yargsObj.title, actor: yargsObj.actor});
    } else if (yargsObj.list) {
      //Find movies
      await findMovies()
      console.log ("Full collection of movies on the database has been displayed above.")
    } else if (yargsObj.update) {
      //Update a movie
      await updateMovie({title: yargsObj.title, newTitle: yargsObj.newTitle});
      console.log (`Movie title ${yargsObj.title} has been Successfully Updated to ${yargsObj.newTitle}`);
    } else if (yargsObj.delete) {
      //Delete a movie
      await deleteMovie({title: yargsObj.title});
      console.log (`${yargsObj.title} has been Successfully Deleted from the database`);
    } else {
      console.log("Incorrect Command");
    }
    await mongoose.disconnect();
};

app(yargs.argv);