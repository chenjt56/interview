//组合方式优化1
function Parent4(name){
  this.name = name;
  this.arr = [1,2,3]
}

function Child4(name, age){
  //重点1
  Parent4.call(this, name)
  this.age = age
}
//重点2
Child4.prototype = Parent4.prototype

Parent4.prototype.say = function(){
  console.log('say hi')
}

var c6 = new Child4('ciri', 16)
var c7 = new Child4('heha', 32)

console.log(c6 instanceof Child4, c6 instanceof Parent4)
console.log(c6.constructor)
