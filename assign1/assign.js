let fruits = ["chiku", "melons", "mango"];
console.log(fruits[0]);

let numbers = [4, 5, 6, 7];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let colors = ["green", "yellow"];
colors.push("red");
console.log(colors);

let animals = ["dog", , "cow"];
animals.pop();
console.log(animals);

let nums = [2, 4, 6];
let doubled = nums.map(function(n) {
  return n * 2;
});
console.log(doubled);