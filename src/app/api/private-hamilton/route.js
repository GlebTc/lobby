import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const {
    name,
    email,
    phone,
    eventStyle,
    eventDate,
    startTime,
    endTime,
    guestCount,
    additionalDetails,
  } = await req.json();

  console.log('Sending Form Back End');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_CONTACT_USER,
      pass: process.env.NEXT_PUBLIC_CONTACT_PASSWORD,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });
  const mailData = {
    from: {
      name: `Hamilton Private Event Form Submission`,
    },
    replyTo: email,
    to: 'Hamilton@lobby.ca',
    bcc: 'webdevelopmenthamilton@gmail.com',
    subject: `Hamilton Private Event Request for ${eventDate} for ${name}`,

    html: `
    <html>
      <head>
        <style>
          /* Define your email styles here */
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }
          .email-content {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
          .email-header {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            border-radius: 5px 5px 0 0;
          }
        </style>
      </head>
      <body>
        <div class="email-content">
          <div class="email-header">
            <h2>Private Event Inquiry for Lobby Hamilton</h2>
          </div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr />
          <p><strong>Event Style:</strong> ${eventStyle}</p>
          <p><strong>Event Date:</strong> ${eventDate}</p>
          <p><strong>Start Time:</strong> ${startTime}</p>
          <p><strong>End Time:</strong> ${endTime}</p>
          <p><strong>Guest Count:</strong> ${guestCount}</p>
          <p><strong>Additional Details:</strong> ${additionalDetails}</p>
        </div>
      </body>
    </html>
  `,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });

  return NextResponse.json({ message: 'BE Email sent' });
}
