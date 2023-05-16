// const simple = [50, "pears", 889, "watermelon"];

// const objZero = { value: 50 };
// const objOne = { value: "pears" };
// const objTwo = { value: 889 };
// const objThree = { value: "watermelon" };

// objZero.next = objOne;
// objOne.next = objTwo;
// objTwo.next = objThree;
// objThree.next = undefined;

// const detailed = [objZero, objOne, objTwo, objThree];

const objZero = { value: 50 };
const objOne = { value: "pears" };
const objTwo = { value: 889 };
const objThree = { value: "watermelon" };

objZero.next = objOne;
objOne.next = objTwo;
objTwo.next = objThree;
objThree.next = undefined;

let curr = objZero;

while (curr) {
    console.log(curr.value);
    curr = curr.next;
}
