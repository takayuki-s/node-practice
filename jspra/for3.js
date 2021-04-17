const characters = [
  {name: "グレイ", age: 18},
  {name: "ルーシィ", age: 17},
  {name: "エルザ", age: 19},
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  // 定数characterを定義
  let character = characters[i];
  
  // 「名前は〇〇です」を出力
  console.log(`名前は${character.name}です`)
  
  // 「〇〇歳です」を出力
  console.log(`${character.age}歳です`)
  
}
