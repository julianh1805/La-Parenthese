const path = require('path')
const express = require('express')
const rateLimit = require('express-rate-limit')
const transporter = require('./mailer')
const { isValidEmail, requireString } = require('./validate')

const app = express()
const PORT = process.env.PORT || 3000
const MAIL_FROM = process.env.MAIL_FROM || 'laparentheseancenis@gmail.com'
const MAIL_TO = process.env.MAIL_TO || 'laparentheseancenis@gmail.com'

app.set('trust proxy', 1)
app.use(express.json())

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
})

app.use('/api/', apiLimiter)

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  const errors = []

  const nameErr = requireString(name, 'Nom', { min: 2, max: 100 })
  if (nameErr) errors.push(nameErr)

  const emailErr = requireString(email, 'Email')
  if (emailErr) errors.push(emailErr)
  else if (!isValidEmail(email)) errors.push('Email : adresse invalide')

  const messageErr = requireString(message, 'Message', { min: 5, max: 5000 })
  if (messageErr) errors.push(messageErr)

  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join(', ') })
  }

  const text = `Message de contact\n\nNom : ${name}\nEmail : ${email}\nMessage : ${message}`

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `Contact — ${name}`,
      text,
    })
    return res.json({ success: true })
  } catch (err) {
    console.error('SMTP error:', err)
    return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" })
  }
})

// Serve Vue SPA
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
