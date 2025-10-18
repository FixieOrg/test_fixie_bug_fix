const AWS = require('aws-sdk');

exports.handler = async (event) => {
  try {
    // SNS messages are wrapped in Records[0].Sns.Message
    const snsRecord = event.Records && event.Records[0] && event.Records[0].Sns;
    if (!snsRecord) {
      throw new Error('Invalid SNS event structure');
    }
    const message = JSON.parse(snsRecord.Message);
    // Example: log the alarm name and state
    console.log(`Alarm ${message.AlarmName} changed to ${message.NewStateValue}`);
    // TODO: add business logic here
    return { statusCode: 200, body: 'Processed' };
  } catch (err) {
    console.error('Error processing SNS event:', err);
    throw err;
  }
};