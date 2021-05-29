const multer = require("multer");
exports.uploadDisk = multer({
  dest: "images",
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype)) {
      return cb(new Error("Please upload a valid file type!"));
    }
    cb(undefined, true);
  }
});

exports.uploadDatabase = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype)) {
      cb(new Error("Please upload a valid file type!"));
    }
    cb(undefined, true);
  }
});
