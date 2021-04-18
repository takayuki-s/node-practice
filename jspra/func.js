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