const nodemailer=require('nodemailer');
const asyncHandler=require('express-async-handler');


const sendEmail= asyncHandler(async(data,req,res)=>{

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_ID, // generated ethereal user
          pass: process.env.MP, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '" HEY 👻" <abc@gmail.com>', // sender address
        to: data.to, // list of receivers
        filename: 'utils\download.jpg',

        subject: data.subject, // Subject line
        text: data.text, // plain text body
        html: data.htm, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
})
module.exports=sendEmail;