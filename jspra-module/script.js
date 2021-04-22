// import Guild from "./guild";　←エラーになった
// const Guild = require("./guild.js").Guild;
// const Fairytail = require("./guild.js").Fairytail;
const { Guild, Fairytail } = require("./guild.js");

const member = new  Guild ("グレイ", 18);
member.info();
const member2 = new Fairytail("グレイ", 18, "アイスメイク");
member2.info();

