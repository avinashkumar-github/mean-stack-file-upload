const express = require("express");
const cors = require("cors");
const multer = require("multer");

require("dotenv").config();
require("./config/db.config");
const ctrlImage = require("./controller/image.controller");

const app = express();

app.use(cors());

const { uploadDisk, uploadDatabase } = require("./config/multer.config");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the App" });
});

app.post("/dirupload", uploadDisk.single("avatar"), ctrlImage.uploadFileToDisk);

app.post(
  "/dbupload",
  uploadDatabase.single("avatar"),
  ctrlImage.uploadFileToDatabase
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at : ${PORT}`);
});
