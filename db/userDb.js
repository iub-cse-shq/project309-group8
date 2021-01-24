const mongoose = require("mongoose");

const usersDB = async () => {
  try {
    const conn = await mongoose.connect(
        'mongodb://localhost:27017/finalproject',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MONGOOSE CONCT");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = usersDB;
