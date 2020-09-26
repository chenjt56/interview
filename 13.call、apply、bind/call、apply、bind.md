# call、apply 和 bind
## 一、 call 与 apply
1. 共同点
   - 都能够改变函数执行上下文，将一个对象的方法交给另一个对象来执行，并且是立刻执行的。
   - 调用 call 和 apply 的对象，必须是一个函数 Function
2. 区别：二者的区别主要体现在参数传递上。
   - call 的使用： `Function.call(obj[,param1[,param2[,...[,paramN]]]])`
     - 调用 call 的对象必须是个 Function
     - call 的第一个参数是一个对象。Function 的调用者会指向这个对象。如果不传，则默认是全局对象 window。
     - 第二个参数开始可以接收任意个参数。每个参数都会映射到相应位置的 Function 的参数上。但是如果将所有参数作为数组传入，他们或作为一个整体映射到 Function 对应的第一个参数上，之后的参数都为空。
        ```javascript
          function func(a, b, c) {/*...*/};
          func.call(obj, 1, 2, 3);    // func 接收到的参数是 1，2，3
          func.call(obj, [1, 2, 3]);  // func 接收到的参数是 [1, 2, 3], undefined, undefined
        ```
   - apply 的使用：`Function.apply(obj[,argArray])`
     - 它的调用者必须是函数 Function，并且只接受两个参数，第一个参数的规则与 call 一致。
     - 第二个参数必须是数组或者类数组，他们会被转化成数组，传入 Function 中，并且会被映射到 Function 的参数上。
        ```javascript
        func.apply(obj, [1,2,3]) // func 接收到的参数实际上是 1,2,3

        func.apply(obj, {
            0: 1,
            1: 2,
            2: 3,
            length: 3
        })      // func 接收到的参数实际上是 1,2,3
        ```
3. call 和 apply 的用途
- 下面会分别列举 call 和 apply 的一些使用场景。声明：例子中没有哪个场景是必须用 call 或者必须用 apply 的，只是个人习惯这么用而已。
- call 的使用场景
   - **对象的继承**
      ```javascript
      function superClass() {
        this.a = 1;
        this.print = function() {
          console.log(this.a);
        }
      }
      function subClass() {
        superClass.call(this);
        this.print();
      }
      subClass(); // 1

      // subClass 通过 call 方法继承了 superClass 的 print 方法和 a 变量
      ```
   - **借用方法**：类数组使用 Array 原型链上的方法 
      ```javascript
      let domNodes = Array.prototype.slice.call(document.getElementByTagName("*");
      ```
- apply 的使用
    - **Math.max 和 Math.min**：来获取数组中最大的，或者最小的一项
      ```javascript
      let max = Math.max.apply(null, array);
      let min = Math.min.apply(null, array);
      ```
    - **实现两个数组合并**: 在 ES6 的扩展运算符出现之前，我们可以用 Array.prototype.push来实现。
      ```javascript
      let arr1 = [1, 2, 3];
      let arr2 = [4, 5, 6];
      Array.prototype.push.apply(arr1, arr2);
      console.log(arr1);  // [1, 2, 3, 4, 5, 6]
      ```
---
## 二、bind 的使用
- bind() 方法创建一个新的函数，在调用时设置 this 关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。
- 语法：`Function.bind(thisArg[, arg1[, arg2[, ...]]])` 
- 如果 bind 的第一个参数是 null 或者 undefined，this 就指向全局对象 window。
- bind 方法 与 apply 和 call 比较类似，也能改变函数体内的 this 指向。不同的是，**bind 方法的返回值是函数，并且需要稍后调用，才会执行。而 apply 和 call 则是立即调用。**
  ```javascript
  function add (a, b) {
      return a + b;
  }
  function sub (a, b) {
      return a - b;
  }
  add.bind(sub, 5, 3); // 这时，并不会返回 8
  add.bind(sub, 5, 3)(); // 调用后，返回 8
  ```