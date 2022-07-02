const app = require("./app");
const dotenv = require("dotenv");
const connectDatababse = require("./config/databse");
const cloudinary = require("cloudinary");
//handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log("Error: ", err.message);
  console.log("shutting down the server due to uncaught Exception");
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatababse();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

//unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log("Error: ", err.message);
  console.log("shutting down the server due to unhandeled primise rejections");
  server.close(() => {
    process.exit(1);
  });
});
