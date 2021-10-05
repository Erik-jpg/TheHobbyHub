const express = require("express");
const serverless = require("serverless-http");
const app = express();
const { Schedule } = require("../../models/Schedule");

exports.handler = async (event) => {
  await connecting;
  console.log("event is ", event);
  switch (event.httpMethod) {
    case "POST": {
      const newSchedule = await Schedule.creates(JSON.parse(event.body));
      return {
        statusCode: 201,
        body: `new date with id of: ${newSchedule._id} was saved`,
      };
    }
    case "GET": {
      const allSchedule = await Schedule.find({});
      return {
        statusCode: 200,
        body: JSON.stringify(allSchedule),
      };
    }
  }
};
