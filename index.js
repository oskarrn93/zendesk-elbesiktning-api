import express from 'express'

const app = express()
const PORT = process.env.PORT || 8002

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
