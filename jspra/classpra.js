class Guild {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log("こんにちは！");
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です！`);
    console.log(`年齢は${this.age}才です！`);
  }
}

const member1 = new Guild("ルーシィ", 17);
member1.info();