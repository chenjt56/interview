// 构造函数实现继承
function Parent1(name) {
  this.name = name;
}

Parent1.prototype.say = function() {
  console.log("say hello");
}

function Child1(name, age) {
  Parent1.call(this, name);
  this.age = age;
}

var p1 = new Parent1('Tom');
console.log(p1);
/**
 * Parent1 {name: "Tom"}
 * name: "Tom"
 * __proto__:
 *   say: ƒ ()
 *   constructor: ƒ Parent1(name)
 *   __proto__: Object
 * 
 */

var c1 = new Child1('Bob', 19);
console.log(c1);

/**
 * Child1 {name: "Bob", age: 19}
 *  age: 19
 *  name: "Bob"
 *  __proto__:
 *    constructor: ƒ Child1(name, age)
 *    __proto__: Object
 * 
 */

 // 可以看到 Child1 并没有继承到 Parent1 中的 say 方法。