const Image = require("./../models/image.model");

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
    const image = new Image();
    image.name = req.file.originalname;
    image.image = req.file.buffer;
    await image.save();
    res.send();
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}),
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  };
