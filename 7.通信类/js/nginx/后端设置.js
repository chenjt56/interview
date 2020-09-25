const http = require('http');
const qs = require('querystring');

var server = http.createServer();

server.on('request', (req, res) => {
  var params = qs.parse(req.url.substring(2));

  // 向前台写 cookie
  res.writeHead(200, {
    'Set-Cookie':'l=a123465;path=/;Domain=www.domain2.com;HttpOnly'
  });

  res.write(JSON.stringify(params));
  res.end();
}).listen('3000');

console.log('Server is running at port 3000...');