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



// 6. Cache With Time Limit

var TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let existId = this.cache.get(key)
    if(existId) {
        clearTimeout(existId.id)
    }
    let id = setTimeout(() => {
        this.cache.delete(key)
    }, duration)
    this.cache.set(key, {value, id})
    return Boolean(existId)
};


TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.get(key)) return this.cache.get(key).value;
    return -1
};


TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

 const timeLimitedCache = new TimeLimitedCache()
 console.log(timeLimitedCache.set(1, 42, 1000)) // false
 console.log(timeLimitedCache.get(1)) // 42
 console.log(timeLimitedCache.count()) // 1
 

//  7 . Debounced

var debounce = function(fn, t) {
    let timerId;
    return function(...args) {
         clearTimeout(timerId);
         timerId = setTimeout(() => {
            fn(...args)
        }, t);
        
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */