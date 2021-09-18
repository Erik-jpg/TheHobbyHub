const fetch = require('node-fetch');
const node = require('node');
const axios = require("axios");

const mongoose = require('mongoose');
const connection = mongoose.connect("mongodb://localhost:8888/test");
const scheduleSchema = new mongose.Schema({author: string, body: string});
const Schedule = mongose.model("scheduleSchema", scheduleSchema);