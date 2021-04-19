const printWanko = () => {
  console.log("にんじゃわんこ");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(printWanko);

call(() => {
  console.log("ひつじ仙人");
});


const calling = (callback) => {
  callback("にんじゃわんこ", 14);
};

calling((name, age) => {
  console.log(`${name}は${age}歳です。`);
});