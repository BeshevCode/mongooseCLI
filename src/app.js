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
    } else if (yargsObj.update) {
      //Update a movie
      await updateMovie({title: yargsObj.title, newTitle: yargsObj.newTitle});
      console.log (`${yargsObj.newTitle} Successfully Updated`);
    } else if (yargsObj.delete) {
      //Delete a movie
      await deleteMovie({title: yargsObj.title});
      console.log ("Successfully Deleted");
    } else {
      console.log("Incorrect command");
    }
    await mongoose.disconnect();
};

app(yargs.argv);