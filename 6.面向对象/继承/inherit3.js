// 组合方式实现继承
function Parent3(name) { 
  this.name = name;
  this.arr = [1, 2, 3];
}
function Child3(name, age){
  Parent3.call(this, name);
  this.age = age;
}
Child3.prototype = new Parent3();

Parent3.prototype.say = function() {
  console.log('say hello');
}

var c4 = new Child3('Lucy', 16);
var c5 = new Child3('Candy', 32);

console.log(c4);
console.log(c5);