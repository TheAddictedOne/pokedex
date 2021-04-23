const https = require('https')
const fs = require('fs')
const path = require('path')
const express = require('express')

const PORT = 3000
const credentials = {
  key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
}
const app = express()

const server = https.createServer(credentials, app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
