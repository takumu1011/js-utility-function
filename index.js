import * as util from './modules/index.js';

let dog = {
  name: '犬',
  age: 2,
};

console.log(util.has(dog, 'name'));
console.log(util.has(dog, 'gender'));
