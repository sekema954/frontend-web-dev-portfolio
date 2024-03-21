const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 5500; // Change port as needed

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validate form data
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a transporter using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ekema3212@gmail.com', // Your Gmail email address
            pass: 'Samuel#1' // Your Gmail password
        }
    });

    // Email message options
    const mailOptions = {
        from: 'ekema3212@gmail.com',
        to: `${email}`,
        subject: 'Contact Form Submission',
        text: `
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone No.: ${phone}
            Message: ${message}
        `
    };

    // Send email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            return res.json({ success: 'Email sent successfully' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});