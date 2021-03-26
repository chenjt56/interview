// 借助原型链实现继承
function Parent2(name) {
  this.name = name;
  this.arr = [1, 2, 3];
}

function Child2(age) {
  this.age = age;
}

// 直接让子类的原型对象指向父类的实例，当子类实例找不到对应的属性时，就会往它的原型对象，
// 也就是父类的实例上找，从而实现对父类的属性和方法的继承。


// 重点在这
Child2.prototype = new Parent2();

var c2 = new Child2(20);
var c3 = new Child2(22);
console.log('c2:', c2);
console.log('c3:', c3);

