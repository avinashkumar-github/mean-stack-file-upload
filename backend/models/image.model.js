const mongoose = require("mongoose");
const imageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: Buffer,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  { timestamp: true }
);

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
