import express from 'express'
import dotenv from 'dotenv'
import { createTicket } from './zendesk.js'

dotenv.config() //ZENDESK_AUTH must be defined in .env
dotenv.config({ path: 'config.env' })

const app = express()
const PORT = process.env.PORT || 8002

app.get('/', function(req, res, next) {
  res.send('hello world')
})

app.post('/new', function(req, res, next) {
  // createTicket({
  //   subject: 'Test subject',
  //   description: 'Test description',
  //   name: 'Oskar Rosén',
  //   email: 'oskar@oskarrosen.com',
  // })
  res.send('Ticket created')
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
