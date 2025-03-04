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

// 6. Join Two Arrays by ID

var join = function(arr1, arr2) {
    let temp = [...arr1, ...arr2],  result = {};
    temp.forEach((ele, index) => {
       if(result.hasOwnProperty(ele.id)) {
        result[ele.id] = {...result[ele.id], ...ele}
       } else {
         result[ele.id] = ele;
       }
    })

    return Object.values(result);
};

arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]},
    {"id": 2, "b": {"c": 84}, "v": [1, 3]}
]

// console.log(join(arr1, arr2));

// 7 . Flatten Deeply Nested Array

var flatArr = function (arr, n) {
    let res = [];
    function helper(nextArr, depth) {
        for(val of nextArr) {
            if(typeof val === 'object' && depth < n) {
                helper(val, depth + 1);
            } else {
                res.push(val);
            }
        }
        return res;
    }
    return helper(arr, 0)
};

let arrNested = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 1]]
console.log('flatArr', flatArr(arrNested, 1))


