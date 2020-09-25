var xhr = XMLHttpRequest();

// 前端开关：浏览器是否读写 cookie
xhr.withCredentials = true;

// 访问 nginx 中的代理服务器
xhr.open('get','http://www.domain1.com:81/?user=admin', true);
xhr.send();