// Primitive Vs Reference!

// Immutable vs Mutable datatypes

// let num1 = 42;
// let num2 = num1;
// num1 += 50; // num1 = num1 + 50;
// console.log(num1, "num1")
// console.log(num2, "num2")

let wayne = {
    furColor: "black",
    isChonky: true,
    hasTail: false,
    softFur: true,
}

// // let wax = {};
// // for (let key in wayne){
// //     wax[key] = wayne[key];
// // }
// let wax = {...wayne};

// wax.furColor = "torty";
// wax["isChonky"] = false;

// console.log("Wayne: ", wayne)
// console.log("Wax  : ", wax)

// function adder(num1, num2, num3, num4){
    //     let sum = num1 + num2 + num3 + num4;
    //     return sum;
    // }
    // function adder(...nums) {
        //     console.log(nums);
        //     let sum = 0;
        //     for (let i = 0; i < nums.length; i++){
            //         let num = nums[i];
            //         sum = sum +num;
            //     }
            //     return sum;
            // }
            
            function adder(...nums){
                let sum = 0;
                //           (ele, idx, arr) 
                nums.forEach(function(num){
        sum += num;
    })
    return sum;
}

// console.log(adder(5, 3, 4, 8, 5, 1, 3, 11))
// console.log(adder())

let banana = {...wayne};

banana.furColor = "torty";
banana["isChonky"] = false;
banana.name = "Wax"
console.log(banana)

let {furColor:fur, name:papaya} = {...banana, name:"Timothy"};

console.log(papaya,"is a", fur, "cat")

// let nums = [1,2,3,4,5];
// let [, two, ...rest] = nums;

// // console.log(one)
// console.log(two)
// console.log(rest)
