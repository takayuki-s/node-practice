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


//filterメソッド　偶数を全て探す
const nums = [1, 2, 3, 4];
const evenNumbers = nums.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);


//filterメソッド　特定条件のキャラを全て探す
const tails = [
  {id: 1, name: "グレイ", age: 18},
  {id: 2, name: "ルーシィ", age: 17},
  {id: 3, name: "エルザ", age: 20},
];
const underTwenty = tails.filter((character) => {
  return character.age < 20;
});
console.log(underTwenty);


//mapメソッド　数字を２倍にして返す
const map_numbers = [1, 2, 3, 4];
const doubleNumbers = map_numbers.map((number) => {
  return number * 2;
});
console.log(doubleNumbers);


//mapメソッド　苗字と名前をつなげて返す
const names = [
  {firstName: "ルーシィ", lastName: "ハートフィリア"},
	{firstName: "グレイ", lastName: "フルバスター"},
	{firstName: "エルザ", lastName: "スカーレット"},
];
const fullNames = names.map((name) => {
  return name.firstName + name.lastName;
});
console.log(fullNames);
