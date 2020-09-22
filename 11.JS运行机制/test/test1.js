console.log(1);
setTimeout(function() {
  console.log(2);
}, 0);
console.log(3);

// 1 3 2
/*
 * console.log() 是同步任务， setTimeout 是异步任务。
 * 异步任务会等同步任务执行完再执行。
 * 虽然 setTimeout 设置的延迟是 0，但浏览器规定延迟最小为 4ms，所以 console.log(2) 在 4ms 后被放入任务队列。
 * 当同步任务执行完，即打印完 1，3 之后，主线程再从任务队列中取任务，打印 2。
*/