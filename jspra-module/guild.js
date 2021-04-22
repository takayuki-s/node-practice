class Guild {
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

class Fairytail extends Guild {
  constructor(name, age, tech) {
    super(name, age);
    this.tech = tech;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です！`);
    console.log(`${this.age}歳です！`);
    console.log(`得意技は${this.tech}です！`);
  }
}

class Test {
}

const member = new  Fairytail ("グレイ", 18, "アイスメイク");
member.info();

// export default Guild;　←エラーになった
module.exports = {
  Guild,
  Fairytail
};