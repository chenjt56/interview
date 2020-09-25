var xhr = new XMLHttpRequest(); // IE8/9 需要使用 window.XDomainRequest 兼容

// 前端设置是否需要携带 cookie
xhr.withCredentials = true;

xhr.open('post', 'http://ww.domain2.com:8080/login', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('use=admin');

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200){
    alert(xhr.responseText);
  }
}