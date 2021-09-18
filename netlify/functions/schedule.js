const mongoose = require('mongoose');
const {
    connection,
    Schedule
} = require('./connection');


exports.handler = async (event) => {
    try {
        await connection
        switch (event.httpMethod) {
            case ('GET'): {
                const allSchedules = await Schedule.find();
                return {
                    statusCode: 200,
                    body: JSON.stringify(allSchedules)
                }
            }
            case ('POST'): {
               const response = await Schedule.create(JSON.parse(event.body));
                return {
                    statusCode: 201,
                    body: JSON.stringify(response)
                }
            }
        }
    } catch (err) {
        console.error('--------------------', err);
        return {
            statusCode: 500,
            body: JSON.stringify(err),
        }
    }
};