const {Guild} = require("./guild.js");
// import Guild from "./guild"

class Fairy extends Guild {
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

const member = new Fairy ("グレイ", 18, "アイスメイク");
member.info();


// module.exports = Failytail;