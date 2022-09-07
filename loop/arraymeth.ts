const list = [1, 2, 3, 4, 5];

console.log("forEach:");
list.forEach((value, index, array) => {
  console.log(`value: ${value}, index: ${index}`);
});

console.log("map: ");
const newList = list.map((value, index, array) => {
  return value * 2;
});

console.log("some: ");
const hasEven = list.some((value, index, array) => {
  return value % 2 == 0;
});
console.log("hasEven", hasEven);

console.log("every: ");
const allEven = list.every((value, index, array) => {
  return value % 2 == 0;
});
console.log("allEven", allEven);
