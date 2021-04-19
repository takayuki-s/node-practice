//pushメソッド
const characters = ["グレイ", "ナツ", "ルーシィ"];
console.log(characters);
characters.push("エルザ");
console.log(characters);


//forEachメソッド
characters.forEach((character) => {
  console.log(character);
});


//findメソッド　3の倍数を探す
const numbers = [1, 3, 5, 7, 9];
const foundNumber = numbers.find((number) => {
  return number % 3 === 0;
});
console.log(foundNumber);


//findメソッド　特定のidを探す
const charas = [
  {id: 1, name: "グレイ", age: 18},
  {id: 2, name: "ルーシィ", age: 17},
  {id: 3, name: "エルザ", age: 19},
];
const foundCharacter = charas.find((chara) => {
  return chara.id === 1;
});
console.log(foundCharacter);