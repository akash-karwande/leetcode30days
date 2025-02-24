// 1. Hello World

const createHelloWorld = function (x) {
  return function (y) {
    return "Hello World";
  };
};

const helloWorld = createHelloWorld(3);
helloWorld(4); // "Hello World"

// 2. Counter

// const createCounter = function(x){
//     return function() {
//         return x++ // return and increment operator
//     }
// }

const createCounter = function (x) {
  let count = -1;
  return function () {
    count = count + 1;
    return count + x; // return and increment operator
  };
};

// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

// 3. To Be Or Not To Be

const expect = function (val) {
  function toBe(val2) {
    if (val === val2) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  }
  function notToBe(val2) {
    if (val !== val2) {
      return true;
    } else {
      throw new Error("Equal");
    }
  }

  return { toBe, notToBe };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// 4. Counter2
var secondCreateCounter = function(init) {
    let currentCount = 0
    function increment() {
        currentCount = currentCount + 1;

        return currentCount + init
    }
    function decrement() {
        currentCount = currentCount - 1;
        return currentCount + init
    }
    function reset() {
        currentCount = 0;
        return init 
    }

    return {increment, decrement, reset}
};

/**
 * const counter = secondCreateCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
