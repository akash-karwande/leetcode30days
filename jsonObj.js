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

// console.log(chunk([1,9,6,3,2], 3)); //  [[1,9,6],[3,2]]

// 3. Array Prototype Last

Array.prototype.last = function() {
    let lastIndex = this.length -1;
    return this[lastIndex]? this[lastIndex] : -1
}

// console.log([1,2,3,4,5].last()); // 5


// 4. groupBy

Array.prototype.groupBy = function(fn) {
    let result = {};
    this.forEach((ele , i) => {
        let key = fn(ele)
        if(result.hasOwnProperty(key)) {
           result[key].push(ele);
        } else {
             result[key] = [];
             result[key].push(ele)
        }
    })
    return result
};

//  console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}


// 5. sortBy

var sortBy = function(arr, fn) {
    return arr.sort((a,b) => {
        return fn(a) - fn(b)
    })
};

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]


