// 定数animalを定義
const animal = {
  name: "レオ",
  age: 3,
  greet: () => {
    console.log("こんにちは");
  }
};

// animalのnameプロパティの値を出力
console.log(animal.name);

// animalのgreetプロパティの関数を実行
animal.greet();