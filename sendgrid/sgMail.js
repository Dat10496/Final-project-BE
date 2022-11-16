require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (data) => {
  try {
    await sgMail.send({
      from: "sneakerstore.nodejs@gmail.com",
      subject: "SNEAKER STORE - Your Purchase Information",
      to: `${data.email}`,
      text: `Thanks you for your purchase
                Your total payment is ${data.data.amount} ${data.data.currency_code}
                For more information contact us:
                Email: "sneakerstore.nodejs@gmail.com"
                Phone: "+84 999 999"`,
    });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = sendMail;
