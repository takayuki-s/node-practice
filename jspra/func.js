// 定数helloに関数を代入
const hello = function() {
  console.log("こんにちは！");
  console.log("私の名前はTekeTECHです");
}
// 定数helloに代入された関数を呼び出し
hello();


// 定数greetにアロー関数を代入
const greet = () => {
  console.log("こんにちは！");
}
// 定数greetを呼び出し
greet();


//引数
const greeting = (name) => {
  console.log(`こんにちは、${name}さん`);
  
};
greeting("TekeTECH");


// 関数の引数にnumber1とnumber2を追加(引数2つバージョン)
const add = (number1, number2) => {
  // number1とnumber2を足した値をコンソールに出力
  console.log(number1 + number2);
  
};
// 引数に5と7を渡して関数を呼び出し
add(5,7);
