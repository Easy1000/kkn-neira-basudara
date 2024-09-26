import { mailOptions, sendMailCallback, transporter } from "../../../../utils/nodemailer"

export async function POST(request) {
  const res = await request.json()

  transporter.sendMail(mailOptions, sendMailCallback)

  return Response.json(res.message)
}
