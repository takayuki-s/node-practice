class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  // infoメソッドを追加
  info() {
    console.log(`名前は${this.name}です`);
  }
  
}

const animal = new Animal("レオ", 3);
animal.greet();

// animalに対してinfoメソッドを呼び出し
animal.info();