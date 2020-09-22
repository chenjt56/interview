//组合方式优化2
function Parent5(name){
  this.name = name
}
function Child5(name, age){
  Parent5.call(this, name)
  this.age = age
}
Child5.prototype = Object.create(Parent5.prototype)
Child5.prototype.constructor = Child5

var c8 = new Child5()
console.log(c8 instanceof Child5, c8 instanceof Parent5)
console.log(c8.constructor)
