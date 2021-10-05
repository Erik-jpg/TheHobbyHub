const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({

    schedule: [
        {
            type: {type: Date}
        }
    ]
})

const Schedule = mongoose.model('Schedule', ScheduleSchema);
module.exports = Schedule;