const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    // const conn = await mongoose.connect(uri);
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log(
      `Database connection is successful. ${conn.connection.host}:${process.env.PORT}`
        .green
    );
  } catch (error) {
    console.info(`${error}`.bold.red);
  }
};

module.exports = connectDB;
