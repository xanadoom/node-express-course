const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount()
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'brisa32@ethereal.email',
      pass: 'znkUpVwTvpzVZYk7Tf',
    },
  })

  let info = await transporter.sendMail({
    from: '"Xanadoom" <xanadoom@gmail.com>',
    to: 'bar@example.com',
    subject: 'hello',
    html: '<h2>Sending email whit node.js</h2>',
  })
  res.json({ info })
}

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'xanadoom@gmail.com', // Change to your recipient
    from: 'alex_8675@yahoo.it', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  const info = await sgMail.send(msg)
  res.json(info)
}

module.exports = sendEmail
