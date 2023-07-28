const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const child_process = require('child_process')

const router = express.Router()

router.get('/demo', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'demo.html'))
})
router.get('/', (req, res) => {
  res.redirect('/demo')
})

module.exports = router
