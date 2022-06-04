const app = require("./app");

const dotenv = require("dotenv");
const connectDatababse = require("./config/databse");

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatababse();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});
