class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // greetメソッドを追加してください
  greet() {
    console.log("こんにちは");
  }
  
}

const animal = new Animal("レオ", 3);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);

// animalに対してgreetメソッドを呼び出し
animal.greet();

//インスタンス追加で検証

const animal2 = new Animal("トラ", 5);
animal2.greet();