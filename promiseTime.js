// 1. Add Two Promises

var addTwoPromises = async function(promise1, promise2) {
    return await promise1 + await promise2
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/

// 2. Sleep Promise
async function sleep(millis) {
    return new Promise((resolve => {
        setTimeout(resolve, millis);
    }));
}

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100


// 3.  Timeout Cancellation
var cancellable = function(fn, args, t) {
    let timer = setTimeout(function() {
         fn(...args)
    }, t);
    return () => clearTimeout(timer);
};


// 4.  Interval Cancellation
var cancellable = function(fn, args, t) {
    fn(...args)
    let timer = setInterval(function() {
         fn(...args)
    }, t);
    return () => clearInterval(timer);
};


// 5. Promise Time Limit

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            let id = setTimeout(() => reject('Time Limit Exceeded'), t);
            try {
                let res = await fn(...args);
                resolve(res);
            } catch(err) {
                reject(err);
            }
        })
        
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */