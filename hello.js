// non blocking
// setTimeout(function() {
//   console.log("hello");
// }, 1000);
// console.log("world");

// blocking
// var start = new Date().getTime();
// while (new Date().getTime() < start + 1000);
// console.log("world");

// blocking
var x = 0;
while (x<3) {
  x++;
  console.log(x)
}
console.log("finish!");

// non blocking
var y = 3;
setTimeout(function() {
  while (y<6) {
  y++;
  console.log(y)
  }
});
console.log("finish!");

// non blocking
var z = 6;
const zSet = function () {
  while (z<9) {
  z++;
  console.log(z)
  }
};
console.log("finish!");