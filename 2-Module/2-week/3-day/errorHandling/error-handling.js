// 1.
function sum(array) {
    let sum = 0;
    try {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    } catch (e) {
        if (e instanceof TypeError) {
            console.log(e.message);
        } else throw e;
    }
    return sum;
}

let res = sum(null);
console.log(res);

// 2.
const sayName = (name) => {
    if (typeof name === "string") {
        console.log(name);
    } else throw new TypeError("Invalid name! Must be a string!");
};

try {
    // tests
    sayName("Alex");
    sayName(1);
} catch (e) {
    console.log(e.message);
}

// 3.
function greet(greeting) {
    if (!greeting) {
        throw new Error("There was no greeting given.");
    }

    console.log(greeting);
}

try {
    greet("");
} catch {
    console.log("Hello World!");
}
