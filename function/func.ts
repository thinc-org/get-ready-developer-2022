// normal
function addNumbers1(A: number, B: number) {
  return A + B;
}

// anonymous function
const addNumbers2 = function (A: number, B: number) {
  return A + B;
};

// arrow anonymous function
const addNumbers3 = (A: number, B: number) => {
  return A + B;
};

console.log(addNumbers1(12, 13));
console.log(addNumbers2(12, 13));
console.log(addNumbers3(12, 13));
