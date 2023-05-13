// const simple = [50, "pears", 889, "watermelon"];

// const detailed = [
//     { value: 50 },
//     { value: "pears" },
//     { value: 889 },
//     { value: "watermelon" },
// ];

// const detailed = [
//     { value: 50, next: "pears" },
//     { value: "pears", next: 889 },
//     { value: 889, next: "watermelon" },
//     { value: "watermelon", next: undefined },
// ];

// console.log(simple[0]);
// console.log(detailed[0]);
// console.log(detailed[0].value);
// console.log(detailed[0].next);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const simple = [50, "pears", 889, "watermelon"];

// const objZero = { value: 50, next: { value: "pears" } };
// const objOne = { value: "pears", next: { value: 889 } };
// const objTwo = { value: 889, next: { value: "watermelon" } };
// const objThree = { value: "watermelon", next: undefined };

// const detailed = [objZero, objOne, objTwo, objThree];

// console.log(detailed[0].next);
// detailed[0].next.value = "bananas";
// console.log(detailed[0].next);
// console.log(detailed[1]);

// console.log(detailed[0]);
// console.log(detailed[0].next.value);
// console.log(detailed[1].value);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

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

// // console.log(detailed[0]);
// // detailed[0].next.value = "bananas";
// // console.log(detailed[1].value); // 'bananas'
// console.log("-------------objZero------------");
// console.log(detailed[0]);
// console.log("-------------changing value!------------");

// detailed[1].value = "pineapple";

// console.log("-------------objOne------------");
// console.log(detailed[1]);

// console.log("-------------objZero------------");
// console.log(detailed[0]);

// // console.log(detailed[0].value);
// // console.log(detailed[0].next.value);
// // console.log(detailed[0].next.next.value);
// // console.log(detailed[0].next.next.next.value);
// // console.log(detailed[0].next.next.next.next);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------
// "thing we're checking for" ? "true condition" : "false condition";

// const simple = [50, "pears", 889, "watermelon"];

// const objZero = { value: 50 };
// const objOne = { value: "pears" };
// const objTwo = { value: 889 };
// const objThree = { value: "watermelon" };

// objZero.next = objOne;
// objOne.next = objTwo;
// objTwo.next = objThree;
// objThree.next = evenNewerObject
// evenNewerObject.next = undefined

// console.log("-------------Values from 'simple' array------------");

// for (let i = 0; i < simple.length; i++) {
//     console.log(simple[i]);
// }

// console.log("-------------Values from Baby Linked List------------");

// let currObj = objZero;

// while (currObj !== undefined) {
//     console.log("------------new loop------------");

//     console.log(currObj.value);

//     console.log("-----Up Next =>", currObj.next);
//     currObj = currObj.next;
// }

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const objZero = { value: 50 };
// const objOne = { value: "pears" };
// const objTwo = { value: 889 };
// const objThree = { value: "watermelon" };

// objZero.next = objOne;
// objOne.next = objTwo;
// objTwo.next = objThree;
// objThree.next = undefined

const objThree = { value: "watermelon", next: null };
const objTwo = { value: 889, next: objThree };
const objOne = { value: "pears", next: objTwo };
const objZero = { value: 50, next: objOne };
