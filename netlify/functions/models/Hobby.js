const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HobbySchema = new Schema({
    links: [
        {
        type: {type: String}
        }
    ]
});
const Hobby = mongoose.model("Hobby", HobbySchema);
module.exports = Hobby;