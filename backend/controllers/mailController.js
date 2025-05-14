const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

dotenv.config({ path: path.join(__dirname, "..", "config", "config.env") });

const sendEmail = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  const emailTemplate = fs.readFileSync(
    path.join(__dirname, "emailTemplate.html"),
    "utf-8"
  );
  const htmlContent = emailTemplate
    .replace("{{firstName}}", firstName)
    .replace("{{lastName}}", lastName)
    .replace("{{email}}", email)
    .replace("{{phone}}", phone)
    .replace("{{message}}", message);
  

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.senderEmail,
      pass: process.env.senderPassword,
    },
  });

  const mailOptions = {
    from: email,
    to: "kiran25042003@gmail.com",
    subject: "New Contact Form Submission",
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Error sending email",
        error: error.message,
      });
    } else {
      console.log("Form response sent successfully:", info.response);
      // return res.status(200).json({
      //   success: true,
      //     message: "Mail sent successfully",
      //   emailContent
      // })
      // return res
      //   .redirect("/index.html")
       return res.status(200).json({
         success: true,
         message: "Email sent successfully",
       });
    }
  });
};

module.exports = sendEmail;
