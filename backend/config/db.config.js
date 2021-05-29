const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/imageUpload", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((response) => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log(`Error connecting DB ${err.message}`);
  });
