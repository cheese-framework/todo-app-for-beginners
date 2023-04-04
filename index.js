// INTRO TO JAVASCRIPT

// indentifier name = content
// var, let, const
// var is <=es5, let is >= es6 and const is es6 and value cannot be altered

function greet(name, age, married = false) {
  return { name, married };
}

// const name = greet("Caleb", 19, true);
// console.log(name);

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// };

// const isEven = (number) => number % 2 === 0;

// console.log(isEven(21));

class Animal {
  #name;
  constructor(name, isDomestic) {
    this.#name = name;
    this.isDomestic = isDomestic;
  }

  makeSound() {
    return this.#name + " is barking!";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, true);
    this.name = name;
  }

  makeSound() {
    return this.name + " is meowing!";
  }
}

const dog = new Animal("Busky", true);
console.log(dog.makeSound());
// console.log(dog.makeSound());
// const cat = new Cat("Tom");
// console.log(cat.makeSound());
