// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(3);
// arr.push(3);
// arr.push(3);
// arr.push(3);
// arr.push(3);
// arr.push(3);
// arr.push(3);
// arr.push(3);

// console.log(arr);

// const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);
// mySet.add(3);

// console.log(mySet);

// mySet.delete(1);

// console.log(mySet.size);

// mySet.delete(100);

// console.log(mySet);

// const obj = { name: "Z" };
// console.log(obj);

// delete obj.name;

// console.log(obj);

// delete obj.name;

// console.log(obj);

// // Standard recursive solution

// function fib(n) {
//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(45));

// Using Memoization

// const cache = {}; // Memo cache

// function fibMemo(n) {
//     if (n === 1) return 0;
//     if (n === 2) return 1;

//     if (cache[n] === undefined) {
//         cache[n] = fibMemo(n - 1) + fibMemo(n - 2);
//     }

//     return cache[n];
// }

// console.log(fibMemo(5));

// console.log(cache);

// console.log(fibMemo(10));

// console.log(cache);

// console.log(fibMemo(20));

// console.log(cache);

// const mySet = new Set();

// const firstA = "a";
// const secondA = "a";

// mySet.add(firstA);
// mySet.add(secondA);

// console.log(mySet);

// const myObj = {
//     hello: "world",
// };

// mySet.add(myObj);
// mySet.add(myObj);
// mySet.add(myObj);
// mySet.add(myObj);
// mySet.add(myObj);
// mySet.add(myObj);
// mySet.add(myObj);

// mySet.add({ hello: "world" });
// mySet.add({ hello: "world" });
// mySet.add({ hello: "world" });
// mySet.add({ hello: "world" });
// mySet.add({ hello: "world" });
// mySet.add({ hello: "world" });

// console.log(mySet);
