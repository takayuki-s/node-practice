const greet = (greetingback) => {
  console.log("こんにちは");
  console.log(greetingback);
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  const greeting = "こんばんは"
  callback(greeting);
};

call(greet);
