import nodemailer from "nodemailer";
import validator from "validator";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    let success = false;

    if (validator.isEmpty(name)) {
      return res.status(404).json({ message: "name should not be empty" });
    }
    if (validator.isEmpty(email)) {
      return res.status(404).json({ message: "Email should not be empty" });
    }
    if (validator.isEmpty(message)) {
      return res.status(404).json({ message: "message should not be empty" });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
      },
    });

    let mailOptions = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to: "akay93796@gmail.com",
      subject: "Portfolio Contect Message",
      html: `<p> Name : ${name} </p>
      <p> Email : ${email} </p>
      <p> Message : ${message} </p>
      `,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        success = false;
        res.status(400).json({ success, message: "Some error occurred" });
      }
      success = true;
      res.status(200).json({
        success,
        message: "Send successfully",
      });
    });
  }
}
