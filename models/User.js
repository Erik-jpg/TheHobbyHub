const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    User: [
    {
        type: {_id: Integer }, 
        name: {type: String},
        username: {type: String},
        password: {type: String}, 
    },
]
})

const User = mongoose.model('User', UserSchema);
mongoose.model.exports = User;