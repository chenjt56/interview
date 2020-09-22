let p = Promise.resolve().then(() => {
  console.log("then1");
  Promise.resolve().then(() => {
    console.log("then1-1");
  });
}).then(() => {
  console.log("then2");
});

p.then(() => {
  console.log("then3");
});

/**
 * 结果： then1  then1-1 then2 then3
 * 分析：
 * 1. 最初的promise被resolve，所以执行后面的第一个then时，里面的回调可以进入微任务队列，
 * 2. 接着执行第二个then，但由于第一个then的回调尚未执行，所以它返回的promise还没有被resolve，
 *    这导致第二个then的回调暂时不会进入队列。
 * 3. 同理，由于第二个then的回调根本还没执行，所以它返回的promise，也就是p，尚未被resolve，
 *    这导致第三个then的回调不会进入队列。
 * 4. 这之后，宏任务清空，开始跑微任务队列的任务，
 * 5. 第一个打印then1，接着遇到一个resolve的promise，所以其后跟着的then的回调进入队列，
 * 6. 同时，第一个then的回调此时执行完毕，所以第二个then的回调得以进入队列。
 * 7. 现在队列多了两个微任务，依次执行即可。
 * 8. 当第二个then的回调执行完毕，意味着它返回的promise也就是p被resolve，
 *    因此p后面的then的回调可以进入队列。
 * 9. 现在队列中只有一个任务，继续执行，打印then3
 */