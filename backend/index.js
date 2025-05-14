const express =require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const dotenv = require('dotenv')
const mailRoute = require('./routes/mailRoute')
const path = require('path')

dotenv.config({path:path.join(__dirname, 'config','config.env')})

const connectDB = require('./config/mongoDB')
connectDB()
app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', mailRoute)
// app.use(express.static(path.join(__dirname, "../frontend/src")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/src/index.html"));
// });

// app.post('/api/send-email', (req, res) => {
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     const message = req.body.message;
//     const emailContent = `
//         <h1>Contact Form Submission</h1>
//         <p><strong>First Name :</strong> ${firstName}</p>
//         <p><strong>Last Name  :</strong> ${lastName}</p>
//         <p><strong>Email      :</strong> ${email}</p>
//         <p><strong>Phone      :</strong> ${phone}</p>
//         <p><strong>Message    :</strong> ${message}</p>
//     `;
//     const transporter = nodeMailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.senderEmail,
//             pass: process.env.senderPassword
//         }
//     })
    
//     const mailOptions = {
//         from: email,
//         to: 'kiran25042003@gmail.com',
//         subject: 'New Contact Form Submission',
//         html : emailContent
//     }
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log("Error sending email:", error);
//            res.status(500)
//           // res.status(500).send('Error sending email')
//         } else {
//           console.log("Form response sent successfully", info.response);
//           res.status(200).send('Email sent successfully')
//           // res.status(200).send('Email sent successfully')
//         }
//         return response.sendFile(path.join(__dirname, 'src', 'index.html'));
//     })
    
// })
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})