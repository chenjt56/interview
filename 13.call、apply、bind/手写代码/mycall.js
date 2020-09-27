function person(a, b, c, d) {
  console.log(this);
  console.log(this.name);
  console.log(a, b, c, d);
}
var student = {
  name: '陈剑涛',
};


Function.prototype.mycall = function() {
  const temp = Symbol('temp');  // symbol 是独有属性，不会覆盖已有属性
  var newArguments = [...arguments];
  let obj = newArguments[0] || window; // 若没有传入 this ， 默认绑定 window
  obj[temp] = this;            // this 指向调用 call 的对象，即我们要改变 this 指向的函数
  newArguments.shift();        // 去掉第一个参数
  const res = obj[temp](...newArguments);
  delete obj[temp];          // 不能修改原来的对象
  return res;
};

person.mycall(student, '吃饭', '上课', '睡觉', '打豆豆');
person.call(student, '吃饭', '上课', '睡觉', '打豆豆');