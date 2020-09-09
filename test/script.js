import { Util } from './../dist/js-utility-function.js';
let dog = {
  name: '犬',
  age: 2,
};
let cat = {
  name: '猫',
};

//has
console.log(Util.has(dog, 'name'));
console.log(Util.has(dog, 'gender'));
//size
console.log(Util.size(dog));
console.log(Util.size(cat));
console.log(Util.size());
//toMap
console.log(Util.toMap(dog));
console.log(Util.toMap(cat));
console.log(Util.toMap());
