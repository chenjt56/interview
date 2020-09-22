console.log(1);

setTimeout(function() {
  console.log(2);
}, 0);

Promise.resolve().then(function() {
  console.log(3);
}).then(function() {
  console.log('4.我是新增的微任务');
})

console.log(5);

/*
 * 结果：1 5 3 4.我是新增的微任务 2
 * 分析：
 * 1. console.log(1) 是同步任务，直接执行，打印1；
 * 2. setTimeout 是异步任务，且是宏任务，放在宏任务队列中；
 * 3. Promise.resolve().then 是 微任务，放在微任务队列中；
 * 4. console.log(5) 是同步任务，直接执行，打印5；
 * 5. 此时主线程任务执行完毕，检查微任务队列中，有 Promise.resolve().then，执行微任务，打印3；
 * 6. 此时发现第二个 .then 任务，属于微任务，添加到微任务队列，并执行，打印4.我是新增的微任务；
 * 7. 微任务执行完毕，第一次循环结束；取出宏任务队列第一个宏任务 setTimeout 到主线程执行，打印2。
 * 
 * ！！！强调：
 * 在微任务执行过程中，发现新的微任务，会将新的微任务添加到队列中，
 * 微任务队列执行完毕后，才会执行下一个循环。
 * 
 */