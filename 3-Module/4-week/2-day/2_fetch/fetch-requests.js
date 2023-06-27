/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

fetch("/products").then((res) => console.log(res.status));

const fetchAsync1 = async () => {
    const res = await fetch("/products");
    console.log(res.status);
};

/* ====== 2. Print true if the status of the response was successful ====== */

fetch("/products").then((res) => console.log(res.ok));

const fetchAsync2 = async () => {
    const res = await fetch("/products");
    console.log(res.ok);
};

/* =================== 3. Print the Content-Type Header =================== */

fetch("/products").then((res) => console.log(res.headers.get("Content-Type")));

const fetchAsync3 = async () => {
    const res = await fetch("/products");
    console.log(res.headers.get("Content-Type"));
};

// (async () => {
//     const res = await fetch("/products");
//     console.log(res.headers.get("Content-Type"));
// })();

/* ============== 4. Print the body of the response as text =============== */

// fetch("/products")
//     .then((res) => res.text())
//     .then((res) => console.log(res));

fetch("/products")
    .then((responseFromFetch) => responseFromFetch.text())
    .then((textFromPreviousPromise) => console.log(textFromPreviousPromise));

const fetchAsync4 = async () => {
    const res = await fetch("/products");
    const htmlText = await res.text(); // convert response body into text
    console.log(htmlText);
};

// //? async plus .then()
// const fetchAsync4 = async () => {
//     const res = await fetch("/products").then((response) => response.text());
//     console.log(res);
// };

// //! Beware crazy code
// const fetchAsync4 = async () => {
//     const res = await (await fetch("/products")).text();
//     console.log(res);
// };
