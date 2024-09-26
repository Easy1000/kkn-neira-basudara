import nodemailer from "nodemailer"
// const nodemailer = require("nodemailer")

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "izaaz240@gmail.com",
    pass: "nnqvrgkioqdmfwql"
  }
})

export const mailOptions = {
  from: "izaaz240@gmail.com",
  to: "izaaz240@gmail.com",
  subject: "testing",
  text: "testing only"
}

export const sendMailCallback = (error, info) => {
  if (error) console.error(error)
  else console.log(info.response)
}

//transporter.verify(function (error) {
//  if (error) {
//    console.log("error")
//    console.error(error)
//  } else {
//    console.log("success")
//  }
//})
