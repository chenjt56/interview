function add(x, y) {
  console.log(1)
  setTimeout(function() { // timer1
    console.log(2)
  }, 1000)
}
add();

setTimeout(function() { // timer2
  console.log(3)
})

new Promise(function(resolve) {
  console.log(4)
  setTimeout(function() { // timer3
    console.log(5)
  }, 100)
  for(var i = 0; i < 100; i++) {
    i == 99 && resolve()
  }
}).then(function() {
  setTimeout(function() { // timer4
    console.log(6) 
  }, 0)
  console.log(7)
})

console.log(8)

/**
 * 预计结果：1 4 8 7 6 3 5 2
 * 实际结果：1 4 8 7 3 6 5 2
 * 分析：
 * 1.add()是同步任务，直接执行，打印1；
 * 2.add()里面的setTimeout是异步任务且宏函数，记做timer1放到宏函数队列；
 * 3.add()下面的setTimeout是异步任务且宏函数，记做timer2放到宏函数队列；
 * 4.new Promise是同步任务，直接执行，打印4；
 * 5.Promise里面的setTimeout是异步任务且宏函数，记做timer3放到宏函数队列；
 * 6.Promise里面的for循环，同步任务，执行代码；
 * 7.Promise.then是微任务，放到微任务队列；
 * 8.console.log(8)是同步任务，直接执行，打印8；
 *** 9.此时主线程任务执行完毕，检查微任务队列中，有Promise.then，执行微任务，
 ***   发现有setTimeout是异步任务且宏函数，记做timer4放到宏函数队列；
 * 10.微任务队列中的console.log(7)是同步任务，直接执行，打印7；
 * 11.微任务执行完毕，第一次循环结束；
 * 12.检查宏任务Event Table，里面有timer1、timer2、timer3、timer4，四个定时器宏任务，按照定时器延迟时间得到
 *    可以执行的顺序，即Event Queue：timer2、timer4、timer3、timer1，取出排在第一个的timer2；
 * 13.取出timer2执行，console.log(3)同步任务，直接执行，打印3；
 * 14.没有微任务，第二次Event Loop结束；
 * 15.取出timer4执行，console.log(6)同步任务，直接执行，打印6；
 * 16.没有微任务，第三次Event Loop结束；
 * 17.取出timer3执行，console.log(5)同步任务，直接执行，打印5；
 * 18.没有微任务，第四次Event Loop结束；
 * 19.取出timer1执行，console.log(2)同步任务，直接执行，打印2；
 * 20.没有微任务，也没有宏任务，第五次Event Loop结束。
 * 
 */