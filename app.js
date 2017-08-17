const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello/:name', function ( req, res ) {
  let name = req.params.name;
  res.send(`Hello ${name}!`);
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
