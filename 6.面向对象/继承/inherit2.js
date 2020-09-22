// 借助原型链实现继承
function Parent2(name) {
  this.name = name;
  this.arr = [1, 2, 3];
}

function Child2(age) {
  this.age = age;
}

// 重点在这
Child2.prototype = new Parent2();

var c2 = new Child2(20);
var c3 = new Child2(22);
console.log('c2:', c2);
console.log('c3:', c3);

