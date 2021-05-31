const Image = require("./../models/image.model");
const sharp = require("sharp");

(exports.uploadFileToDisk = (req, res) => {
  res.send();
}),
  (err, req, res, next) => {
    if (err) {
      res.status(400).send({ error: err.message });
    }
  };

(exports.uploadFileToDatabase = async (req, res) => {
  try {
    //Save into DB

    //Sharp to resize and convert the type
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 300, height: 300 })
      .png()
      .toBuffer();
    const image = new Image();
    image.name = Date.now();
    image.type = req.file.mimetype;
    image.image = buffer; //req.file.buffer;
    await image.save();
    res.send();
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}),
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  };

exports.uploadMultiFileToDatabase = async (req, res) => {
  try {
    console.log(req.file);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.readFileFromDatabase = async (req, res) => {
  try {
    const data = await Image.find();
    res.send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
