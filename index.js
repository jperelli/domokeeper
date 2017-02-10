var express = require('express')
var app = express()

var PORT = process.env.PORT || 43569;
app.set('port', PORT);
app.use(function (req, res, next) {
  res.header('X-powered-by', 'domokeeper v' + process.env.npm_package_version)
  next()
})

app.get('/', function (req, res) {
  res.send('')
})

app.listen(PORT, function () {
  console.log('domokeeper server listening on port ' + PORT)
})