import * as util from './modules/index.js';

let dog = {
  name: '犬',
  age: 2,
};
let cat = {
  name: '猫',
};

//has
console.log(util.has(dog, 'name'));
console.log(util.has(dog, 'gender'));
//size
console.log(util.size(dog));
console.log(util.size(cat));
console.log(util.size());
//toMap
console.log(util.toMap(dog));
console.log(util.toMap(cat));
console.log(util.toMap());
