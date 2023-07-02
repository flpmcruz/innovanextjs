import nodemailer from "nodemailer";

export const sendMail = async (info: any) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: true,
    port: 465,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD, 
    },
  });

  const mail = { 
    from: `Innova Construction <${process.env.SMTP_EMAIL}>`,
    to: info.to,
    subject: info.subject,
    html: info.msg,
  }; 

  return await transporter.sendMail(mail);
};
