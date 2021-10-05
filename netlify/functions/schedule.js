const mongoose = require("mongoose");
const { connection } = require("./connection");
const { Schedule } = require("../../models/Schedule");

const parser = ({body, ...event}) => ({...event, body: !!body ? JSON.parse(body) : ''})


exports.handler = async (event) => {
  try {
      console.log('before', event);
      console.log(JSON.parse(event.body));

    await connection;
    console.log('after', event);
    switch (event.httpMethod) {
      case "GET": {
        console.log('GET method');
        const allSchedules = await Schedule.find(JSON.stringify(event.body));
        return {
          statusCode: 200,
          body: JSON.stringify(allSchedules),
        };
      }
      case "POST": {
          const response = await Schedule.create(JSON.parse(event.body));
        return {
          statusCode: 201,
          body: JSON.stringify(response),
        };
      }
    }
  } catch (err) {
    console.error("--------------------", err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
