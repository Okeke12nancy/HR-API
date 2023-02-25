const http = require("http");
const dotenv = require("dotenv");
require("colors");
const app = require("./app");
const logger = require("./config/logger.config");
const connectDB = require("./config/database.config");

// http server instance
const server = http.createServer(app);

dotenv.config();

// connecting to database
connectDB(process.env.DATABASE_URI);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  logger.info(`Backend is blazing 🔥🔥🔥 @ port ${PORT}`.bold.yellow);
  //   console.log(`Backend is blazing 🔥🔥🔥 @ port ${PORT}`);
});
