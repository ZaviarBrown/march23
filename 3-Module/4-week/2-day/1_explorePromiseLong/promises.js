/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

const num1 = () => {
    return 1;
};

const num2 = async () => {
    return 2;
};

console.log("num1", num1());
console.log("num2", num2());
num2().then((res) => console.log(res));

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

const waiting = async () => {
    const value = await num2();

    console.log("value", value);
};

waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

const waitForMyPromise = async () => {
    const promise = new Promise((res) => {
        setTimeout(() => {
            res("done!");
        }, 1000);
    });

    const result = await promise;

    console.log("The promise is", result);
};

waitForMyPromise();
/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

new Promise((res) => {
    setTimeout(() => {
        res("done!");
    }, 1500);
}).then((res) => console.log("My other promise is", res));

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

const wait = (seconds) => {
    // console.log("wait has begun!");
    return new Promise((res) => setTimeout(res, seconds * 1000));
};

const twoSecondMessage = async () => {
    await wait(2);
    console.log("I just got done waiting 2 full seconds my goodness");
};

twoSecondMessage();

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = (random) => {
    return new Promise((res, rej) => {
        if (random > 0.5) res("success!!!");
        else rej("random error");
    });
};

for (let i = 1; i < 10; i++) {
    // console.log("THE LOOP IS GOOOOIINNNGGGG");
    const randNum = Math.random();
    wait(2 + randNum)
        .then(() => tryRandomPromise(randNum))
        .then((res) => console.log(`random try # ${i} was ${res}`))
        .catch((e) => console.log(`random try # ${i} was ${e}`));
}

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

const tryAsyncPromise = async (i) => {
    const randNum = Math.random();

    await wait(3 + randNum);

    try {
        const res = await tryRandomPromise(randNum);
        console.log(`second try # ${i} was ${res}`);
    } catch (e) {
        console.log(`second try # ${i} was ${e}`);
    }
};

for (let i = 1; i < 10; i++) {
    tryAsyncPromise(i);
}

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

console.log("END OF PROGRAM");
