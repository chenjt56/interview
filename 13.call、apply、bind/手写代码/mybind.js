function person(a, b, c, d) {
  console.log(this);
  // console.log(this.name);
  console.log(a, b, c, d);
}
var student = {
  name: '陈剑涛',
};
Function.prototype.mybind = function (obj) {
  if(typeof this !== 'function') {
    return new Error('类型错误')
  }
  const _this = this; // 防止 this 丢失
  let empty = function() {}; // 
  let agrs = [...arguments].slice(1);
  let newFunc = function () {
    if(this instanceof newFunc){
      _this.apply(this, (agrs.concat([...arguments])));
    }else{
      _this.apply(obj, (agrs.concat([...arguments])));
    }
  }
  empty.prototype = this.prototype;
  newFunc.prototype = new empty;
  return newFunc;
}
// person.mybind(student, '吃饭', '睡觉')('上课', '打豆豆');
// person.bind(student, '吃饭', '睡觉')('上课', '打豆豆');

var func = person.mybind(student,'吃饭', '睡觉');
var b = new func('上课', '打豆豆');
var func1 = person.bind(student,'吃饭', '睡觉');
var b1 = new func1('上课', '打豆豆');