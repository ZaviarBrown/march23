// const arr = [1, 2, 3];

// console.log(arr.includes(3));
// arr.length

// const mySet = new Set();

// mySet.add("firstString");
// console.log(mySet.size);

// console.log(mySet.has("firstString"));
// console.log(mySet.has("secondString"));
// mySet.delete("firstString");

// console.log(mySet.size);

// const mySet = new Set();

// const myStr = "Z";

// mySet.add(myStr);
// mySet.add(myStr);
// mySet.add(myStr);
// mySet.add(myStr);
// mySet.add(myStr);
// mySet.add(myStr);

// const myObj = {
//     name: "Z",
// };

// mySet.add(myObj);
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });
// mySet.add({ name: "Z" });

// console.log(mySet);

// // Standard recursive solution

// function fib(n) {
//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(45));

// Using Memoization

const cache = {}; // Memo cache

function fibMemo(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;

    if (cache[n] === undefined) {
        cache[n] = fibMemo(n - 1) + fibMemo(n - 2);
    }

    return cache[n];
}
console.log(cache);
console.log(fibMemo(5));
console.log(cache);

console.log(fibMemo(10));
console.log(cache);

console.log(fibMemo(20));
console.log(cache);
