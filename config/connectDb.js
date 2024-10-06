const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://jainaditi1310:Aditi2003@cluster2.hp6x1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2");
    
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;