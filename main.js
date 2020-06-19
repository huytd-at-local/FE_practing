const characters = [
  { name: "cho", age: 14 },
  { name: "meo", age: 15 },
  { name: "ga", age: 16 },
];

for (let i = 0; i < characters.length; i++) {
  console.log(`名前は${characters[i].name}です`);
  console.log(`${characters[i].age}際です`);
  console.log("---------------");
}

const greet = function () {
  console.log("hi!!");
  console.log("let study");
};

greet();

const number1 = 103;
const number2 = 72;
const number3 = 189;

let maxNumber = 0;
// getMax関数を定義してください
const getMax = (a, b, c) => {
  let maxNumber = 0;
  let numbers = [a, b, c];
  for (i = 0; i < numbers.length; i++) {
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
};
maxNumber = getMax(number1, number2, number3);
// 「最大値は○○です」と出力してください
console.log(`最大値は${maxNumber}です`);
