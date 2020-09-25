const http = require('http');
const qs = require('querystring');

var server = http.createServer();
server.on('request', (req, res) => {
  var postData = '';

  // 数据块接收中
  req.addListener('data', (chunk) => {
    postData += chunk;
  });

  // 数据接收完毕
  req.addListener('end', () => {
    postData = qs.parse(postData);

    // 跨域后台设置
    res.writeHead(200, {
      'Access-Control-Allow-Credentials': 'true', // 后端允许发送 cookie
      'Access-Control-Allow-Origin': 'http://www.domain1.com', // 允许访问的域（协议 + 域名 + 端口）
      /**
       * 此处设置的 cookie 还是 domain2 的而非是 domain1， 因为后端也不能跨域写 cookie（nginx 反向代理可以实现），
       * 但是只要 domain2 中写入一次 cookie 认证，后面的跨域接口都能从 domain2 中获取 cookie，从而实现所有接口都能跨域访问
       * 
       */
      'Set-Cookie':'l=a123456,Path=/;Domain=www.main2.com;HttpOnly'
    });
  });

  server.listen('3000');
  console.log('Server is running at port 3000...');
})