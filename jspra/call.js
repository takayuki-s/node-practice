const greet = (e) => {
  console.log("こんにちは");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(greet);