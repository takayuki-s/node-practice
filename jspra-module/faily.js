class Failytail {
  constructor(name, age) {
    this.name = name;
    this.age =age;
  }

  greet() {
    console.log("こんにちは");
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です！`);
    console.log(`${this.age}歳です！`);
  }
}

const member = new Failytail ("ルーシィ", 17);
member.info();

export default Failytail;

