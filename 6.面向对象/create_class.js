function Animal(name){
  this.name = name;
}

class Animal2 {
  constructor(name) {
    this.name = name;
  }
}

var a1 = new Animal('dog');
var a2 = new Animal2('cat');
console.log(a1);
console.log(a2);
console.log(a1.__proto__.constructor);
console.log(a2.__proto__.constructor);