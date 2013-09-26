var fs      = require('fs')
var express = require('express')
var config  = require('./config.json')
var app     = express()

app.get(/^\/(.+)/, function(request, response) {
  var url, split_url, compiled, x = 0

  url = request.params[0] || [];
  
  if(url === 'favicon.ico') response.send(404)

  split_url = url.split("+")
  compiled = []

  response.contentType('text/css')  

  for(var i=0; i<split_url.length; i++) 
  {
    _self = split_url[i]

    console.log("Reading file at %s", _self)

    fs.readFile(config.base_url + _self, 'utf-8', function(error, data) {
      x += 1
      
      compiled.push(data)

      if(x == split_url.length) {
        console.log("All files loaded. Sending response")
        response.send(compiled.join("\n"))
      }
    })
  }
})


app.listen(config.port)

console.log("Harvester listening on port", config.port)