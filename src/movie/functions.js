const Movie = require("./model");

//Creating and Exporting addMovie function which adds movies to the list
exports.addMovie = async (movieObj) => {
  try {
    const response = await Movie.create(movieObj);
    console.log(response);
  } catch (error) {
    console.log (error);
  }
};

//Creating and Exporting findMovies function which show all movies from the list
exports.findMovies = async () => {
  try {
    const response = await Movie.find();
    console.log (response);
  } catch (error) {
    console.log (error);
  }
};

//Creating and Exporting updateMovie function which updates the title of already existing movie from the list, with a new title.
exports.updateMovie = async (movieObj) => {
  try {
    const response = await Movie.findOneAndUpdate({
      title: movieObj.title}, 
      {$set: {title: movieObj.newTitle}}, 
      {new: true}
      );
    console.log (response);
  } catch (error) {
    console.log (error);
  }
};

//Creating and Exporting deleteMovie function which deletes a movie from the list
exports.deleteMovie = async (movieObj) => {
  try {
    const response = await Movie.deleteOne(movieObj);
    console.log(response);
  } catch (error) {
    console.log (error);
  }
};