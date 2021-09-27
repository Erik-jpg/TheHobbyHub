const mongoose = require("mongoose");
const connection = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://TheHobbyHut:27017/test"
);
const scheduleSchema = new mongoose.Schema({ author: String, body: Date });
const Schedule = mongoose.model("scheduleSchema", scheduleSchema);

module.exports = {
  connection,
  Schedule,
};
