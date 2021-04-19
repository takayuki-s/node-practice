const greet = (e) => {
  console.log("こんにちは");
  console.log(e);
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  const e = "こんばんは"
  callback(e);
};

call(greet);