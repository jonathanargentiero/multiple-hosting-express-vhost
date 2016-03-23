var fs = require('fs'),
  path = require('path'),
  express = require('express'),
  vhost = require('vhost');

// Global application declaration
var app = express();

// Shared routes
app.get('/health', function(req, res) {
  res.writeHead(200);
  res.end();
});

// Virtual hosts
var virtualHosts = JSON.parse(fs.readFileSync('vhosts.json', 'utf8'));
virtualHosts.forEach(function(virtualHost) {
  var virtualHostApp = express();
  virtualHostApp.use(express.static(path.join(__dirname, virtualHost.path)));
  app.use(vhost(virtualHost.domain, virtualHostApp));
});

// Listen on port 8080
app.listen(8080);