// npm module to Send Mails
const nodemailer = require("nodemailer");

const schedule_satus_model = require('../model/mongo_schedules.js');

// Function to Send mails for incoming details
async function send_mail(mail_details,schedule_group) {

  let testAccount = await nodemailer.createTestAccount();

  // create Transport with Host,Authentication
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, 
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASSWORD, 
    },
  });

  // mail Sending with Options
  let info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: mail_details.mail_to, 
    subject: mail_details.subject,
    text: mail_details.body_text, 
  });


  const status_data = {
    schedule_group:schedule_group,
    mail_details:{
    mail_to :mail_details.mail_to ,
    subject:mail_details.subject,
    body_text: mail_details.body_text,
    },
    status:info.response.includes('OK')?'Success':'Failure'
  }

  const schedule_satus = new schedule_satus_model.schedule_status_modle(status_data)

  schedule_satus.save().then((data)=>{
    console.log('Data Successfully Logged  ',data )
  }).catch((err)=>{
    console.log('Data Not Logged  ', err )
  })

  console.log("Message sent", info);

}

module.exports = send_mail