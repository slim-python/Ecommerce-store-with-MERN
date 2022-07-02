const moongoose = require("mongoose");

const connectDatababse = () => {
  moongoose
    .connect(process.env.DB_URI, {
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server ${data.connection.host}`);
    });
};

module.exports = connectDatababse;
