const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendSMS = async ({ body, phoneNumber }) => {
  //   console.log("send sms func", "body: ", body, "phoneNumber: ", phoneNumber);
  await client.messages
    .create({
      body: `\n ${body}`,
      from: "+12057082821",
      to: `+91${phoneNumber}`,
    })
    .then((message) => console.log(message.sid));
};

module.exports = sendSMS;
