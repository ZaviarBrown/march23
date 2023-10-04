const myFirstArr = [1, 2, 3];
const myFirstObj = {
    a: "A",
    b: "B",
};

console.log([4, ...myFirstArr]);
console.log(myFirstArr);

console.log(
    "--------------------------------------------------------------------"
);

console.log({ ...myFirstObj, c: "C" });
console.log(myFirstObj);
