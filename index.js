const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/goodbye', function (req, res) {
    res.send('goodbye')
  })

app.listen(3000, () =>{
    console.log('server start!!');
});