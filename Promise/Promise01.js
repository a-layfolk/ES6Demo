function timeout(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms, ["one", "two", "three"]);
  });
}

timeout(100).then(function(value) {
  console.log(value);
});
// 100ms 后打印 ["one", "two", "three"]