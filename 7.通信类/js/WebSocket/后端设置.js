const socket = require('socket.io');
const http = require('http');
// 启动 http 服务
var server = http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end();
}).listen('3000');

console.log('Server is running at port 3000...');

// 监听 socket 连接
socket.listen(server).on('connection', (client) => {
  // 接收消息
  client.on('message', (msg) => {
    client.send('hello' + msg);
    console.log('data from client -->' + msg);
  });

  // 断开连接
  client.on('disconnect', () => {
    console.log('Client socket has closed.');
  })
});