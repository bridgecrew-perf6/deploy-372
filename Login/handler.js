'use strict';

module.exports.hello1 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully123!',
        input: event,
      },
      null,
      2
    ),
  };
};