function person(a, b, c, d) {
  // console.log(this);
  // console.log(this.name);
  // console.log(a, b, c, d);
  return {
    name: this.name,
    a, b, c, d
  }
}
var student = {
  name: '陈剑涛',
};

Function.prototype.myapply = function() {
  let newArguments = [...arguments];
  // console.log(newArguments);
  let obj = newArguments[0] || window;
  const temp = Symbol('temp');
  obj[temp] = this;
  // console.log(obj[temp]);
  const res = obj[temp](...newArguments[1]);
  delete obj[temp];
  return res;
}

let obj1 = person.myapply(student, ['吃饭', '上课', '睡觉', '打豆豆']);
let obj2 = person.apply(student, ['吃饭', '上课', '睡觉', '打豆豆']);
console.log(obj1);
console.log(obj2);