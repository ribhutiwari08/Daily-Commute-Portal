const mongoose = require("mongoose");

const commuteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  distance: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Commute", commuteSchema);