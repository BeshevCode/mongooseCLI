require("dotenv").config();
const mongoose = require("mongoose");

//Creating a asynchronous connection function.
//It is asynchronous because the app have to wait for the connection to be established before it continue.  
const connection = async () => {
  try {
    //Connects to the database and the connection stays open and we can manipulate that connection anywhere in the app
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Successfully Connected");
  } catch (error) {
      console.log (error);
  }
};

connection();