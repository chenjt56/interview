setTimeout(function(){
  console.log(1)
});
new Promise(function(resolve){
  console.log(2);
  for(var i = 0; i < 10000; i++){
      i == 9999 && resolve();
  }
}).then(function(){
  console.log(3)
});
console.log(4);
/**
 * 
 * 结果：2 4 3 1
 * 分析：
 * 1.setTimeout是异步，且是宏函数，放到宏函数队列中；
 * 2.new Promise是同步任务，直接执行，打印2，并执行for循环；
 * 3.promise.then是微任务，放到微任务队列中；
 * 4.console.log(4)同步任务，直接执行，打印4；
 * 5.此时主线程任务执行完毕，检查微任务队列中，有promise.then，执行微任务，打印3；
 * 6.微任务执行完毕，第一次循环结束；从宏任务队列中取出第一个宏任务到主线程执行，打印1。
 * 
 */