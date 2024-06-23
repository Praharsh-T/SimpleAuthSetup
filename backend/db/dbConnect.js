const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myauthdb");
    console.log("Database Connected Successfully!! ");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
