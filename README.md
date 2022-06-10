# mongooseCLI

The application covers all CRUD operations and allows users to store movies in a MongoDB database using mongoose.

Examples of how to use the application:

node src/app.js --add --title <movieTitle> --actor <actor> <!-- Adding movie title and actor(optional) to the database. -->

node src/app.js --update --title <movieTitle> --newTitle  <newMovieTitle> <!-- Updating already existing movie title on the database with a new one. -->

node src/app.js --list <!-- Displaying all movies that currently exist in the database. -->

node src/app.js --delete --title <movieTitle> <!-- Deleting a movie from the database. -->    