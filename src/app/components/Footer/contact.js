'use server'

const { transporter, sendMailCallback } = require("../../../../utils/nodemailer")

export async function contact(formData) {
  const mail = {
    from: "izaaz240@gmail.com",
    to: "izaaz240@gmail.com",
    subject: "Message From Visitor!!",
    text: formData.get('message')
  }

  transporter.sendMail(mail, sendMailCallback)
}
