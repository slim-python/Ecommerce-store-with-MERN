const nodemailer = require("nodemailer");
const { options } = require("../routes/userRoute");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMTP_SERVICE,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
