for(var i=0; i<4; i++){
  setTimeout(function(){
    console.log(i)
  }, 0)
}
/*
 * 结果：4个4。
 * 解析：这题主要考察异步任务放入任务队列的时机。
 * 当执行到 setTimeout 即定时器时，并不会马上把这个异步任务放入任务队列，而是等时间到了之后才放入。
 * 然后等执行栈中的同步任务执行完毕后，再从任务队列中依次取出任务执行。
 * for 循环是同步任务，会先执行完循环，此时 i 的值是 4。
 * 4ms 后 console.log(i) 被依次放入任务队列，此时如果执行栈中没有同步任务了，
 * 就从任务队列中依次取出任务，所以打印出 4 个 4。
 */

// 解决方案
//方法1：把 var 换成 let
for(let i=0; i<4; i++){
  setTimeout(function(){
    console.log(i)
  }, 0)
}

//方法2：使用立即执行函数
for(var i=0; i<4; i++){
  (function(i){
    setTimeout(function(){
      console.log(i)
    }, 0)
  })(i)
}

//方法3：加闭包
for(var i=0; i<4; i++){
  var a = function(){
    var j = i;
    setTimeout(function(){
      console.log(j)
    }, 0)
  }
  a();
}
