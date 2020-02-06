const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res, next) => {
  res.send(
    '<p><a href="/dice/6">６面体のサイコロ</a><br />)' +
      '<a href="/dice/12">１２面体のサイコロ</a></p>'
  )
})

app.get('/dice/6', (req, res) => {
  res.send('今回の値は...' + dice(6))
})

app.get('/dice/12', (req, res) => {
  res.send('今回の値は...' + dice(12))
})

function dice (n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(8081)
