// 1. Function composition

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// approach 1

// const compose = function (functions) {
//     return function (x) {
//       if (functions.length === 0) return x;
//       return functions.reduceRight((acc, fn) => {
//         return acc = fn(acc);
//       }, x);
//     };
//   };

// approach 2

  var compose = function(functions) {
    
    return function(x) {
        if(functions.length === 0) return x
        let result = x;
        for(let i = functions.length -1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result
        
    }
};

  
  const fn = compose([(x) => x + 1, (x) => 2 * x]);
//   console.log(fn(4)); // 9

// 2. Return Length of Arguments Passed

var argumentsLength = function(...args) {
    return args.length
    
};

console.log(argumentsLength(1, 2, 3))  // 3