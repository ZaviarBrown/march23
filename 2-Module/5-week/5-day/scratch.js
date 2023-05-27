// const obj = { num1: 5, str1: "banana", game: "EldenRing" };

// console.log(obj);

// // {obj.num1, obj.str1} = {obj.str1, obj.num1}; //! Does not work
// [obj.num1, obj.str1] = [obj.str1, obj.num1];

// console.log(obj);

// const { num1, str1: exampleB, game } = obj;

// console.log(num1);

// console.log(game);
// console.log(obj.game);

// const arr = [1, 2, 3];

// console.log(arr[1]);
// console.log(arr[1.5]);

// console.log(arr.slice(1));
// console.log(arr.slice(1.5));

//! Rule 1 Arr.sort()
// a - b => "a"scending
// b - a => "b"escending => descending

//! Rule 2 Arr.sort()
// return value is > 0  =>  sort a after b, meaning b comes first, e.g. [b, a]
// return value is < 0  =>  sort a before b, meaning a comes first, e.g. [a, b]
// return value === 0   =>  keep original order of a and b

const arr = [5, 4, 3, 2, 1];
// [4, 5, 3, 2, 1];

// arr.reduce((prev, next) => prev < next);
// arr.sort((a, b) => a < b); // Not the same as reduce!

console.log(arr.sort((a, b) => a - b))