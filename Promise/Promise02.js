let promise = new Promise(function(resolve, reject) {
  console.log("Promise");
  // 立即执行 resolve 函数，我认为应该是 promise 实例中的 resolve 函数 
  resolve();
});

promise.then(function() {
  console.log("Resolve");
});

console.log("Hi");
// Promise
// Hi
// Resolve