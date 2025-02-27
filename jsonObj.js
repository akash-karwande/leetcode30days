// 1. Is Object Empty

var isEmpty = function(obj) {
    return Object.keys(obj).length ? false : true;
};

// 2. Chunk Array

// var chunk = function(arr, size) {
//     let result = [];
//     for (let i = 0; i < arr.length; i= i + size) {
//         result.push(arr.slice(i, i + size));
//     }
    
//     return result
// };

function chunk(arr, size) {
    if(arr.length === 0 || size < 1) return []
    return [arr.slice(0,size), ...chunk(arr.slice(size), size)]
  };

console.log(chunk([1,9,6,3,2], 3)); //  [[1,9,6],[3,2]]

// 3. Array Prototype Last

