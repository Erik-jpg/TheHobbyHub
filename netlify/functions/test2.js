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
        body: JSOn.stringify({Schedule}),
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
