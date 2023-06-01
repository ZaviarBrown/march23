// const myArr = [[1], [2], [3]];

// console.log(myArr[0]);
// console.log(myArr[9][5]);

// const arr1 = [1, 2];

// const visited = new Set();

// visited.add(arr1);

// console.log(visited);

// console.log(visited.has(arr1));
// console.log(visited.has([1, 2]));

// const arr1 = [1, 2];

// const visited = new Set();

// visited.add(arr1.toString());

// console.log(visited);

// console.log(visited.has(arr1.toString()));
// console.log(visited.has([1, 2].toString()));

// const obj1 = { name: "Zaviar" };
// const obj2 = obj1;
// const obj3 = { ...obj1 };

// console.log(obj1);
// console.log(obj2);

// obj1.name = "Blue";
// obj2.name = "Green";

// console.log(obj1);
// console.log(obj2);

// console.log(obj1 === obj1);
// console.log(obj1 === obj2);
// console.log(obj1 === obj3);

const obj1 = { name: "Zaviar", anotherObj: { game: "EldenRing" } };
const obj2 = obj1.anotherObj;
// const obj3 = { ...obj1 };
let obj3 = JSON.stringify(obj1);

console.log(obj3);
obj3 = JSON.parse(obj3);

console.log(obj3);

console.log(obj1 === obj1);
console.log(obj1.anotherObj === obj2);
console.log(obj1 === obj3);
console.log(obj1.anotherObj === obj3.anotherObj);

// console.log(obj1);
// console.log(obj3);

// obj1.name = "Blue";
// obj3.name = "Green";

// console.log(obj1);
// console.log(obj3);

// obj1.anotherObj.game = "Dark Souls";

// console.log(obj1);
// console.log(obj3);
