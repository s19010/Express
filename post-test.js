const express = require('express')
const app = express()
const port = 8081

app.listen(port)

app.get('/', (req, res) => {
  res.send(
    '<form method="POST">' +
      '<textarea name="memo">テスト</textarea>' +
      '<br /><input type="submit" value="送信">' +
      '</form>'
  )
})

app.post('/', (req, res) => {
  res.send('POSTされました')
})
