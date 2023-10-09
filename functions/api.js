const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()

router.get("/", (_, res) => {
	res.json({"message": "inizializzato il server, siuuuuuuuuuuuuuuuuuuuu"})
})

router.get("/reviews", (_, res) => {
	res.json({"message": "richieste le recensioni"})
})

app.use('/', router)

module.exports.handler = serverless(app)
