setTimeout(function() { // timer1
  console.log(1);
  setTimeout(function() {  // timer3
    console.log(2);
  })
}, 0);
setTimeout(function() {  // timer2
  console.log(3);
}, 0);

/**
 * 结果： 1 3 2
 * 分析：
 * 1.第一个setTimeout是异步任务且宏函数，记做timer1放到宏函数队列；
 * 2.第三个setTimeout是异步任务且宏函数，记做timer2放到宏函数队列；
 * 3.没有微任务，第一次Event Loop结束；
 * 4.取出timer1，console.log(1)同步任务，直接执行，打印1；
 * 5.timer1里面的setTimeout是异步任务且宏函数，记做timer3放到宏函数队列；
 * 6.没有微任务，第二次Event Loop结束；
 * 7.取出timer2，console.log(3)同步任务，直接执行，打印3；
 * 8.没有微任务，第三次Event Loop结束；
 * 9.取出timer3，console.log(2)同步任务，直接执行，打印2；
 * 10.没有微任务，也没有宏任务，第四次Event Loop结束；
 * 
 */