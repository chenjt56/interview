let p = Promise.resolve();

p.then(() => {
  console.log("then1");
  Promise.resolve().then(() => {
    console.log("then1-1");
  });
}).then(() => {
  console.log("then1-2");
});

p.then(() => {
  console.log("then2");
}); 

/**
 * 结果：then1 then2 then1-1 then1-2
 * 分析：同一个 Promise 的每个链式调用的开端会首先依次进入微任务队列。
 * 
 */