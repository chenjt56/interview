// 利用node + express + http-proxy-middleware搭建一个proxy服务器。
const express = require('express');
const proxy = require('http-proxy-middleware');

var app = express();
app.use('/', proxy({
  // 代理跨域目标接口
  target: 'http://ww.domain2.com:8080',
  changeOrigin: true,

  // 修改响应头信息，实现跨域并允许携带 cookie
  onProxyRes: function(proxRes, req, res) {
    res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
    res.header('Access-Control-Allow-Credentials', 'true');
  },

  // 修改响应信息中 cookie 域名
  cookieDomainRewrite: 'www.domain1.com' // 可以为 false，表示不修改
}));

app.listen(3000);
console.log('Proxy server is running at port 3000...');