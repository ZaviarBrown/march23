/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

fetch("/products").then((res) => console.log(res.status));

const asyncFetch1 = async () => {
    const res = await fetch("/products");
    console.log(res.status);
};

/* ====== 2. Print true if the status of the response was successful ====== */

fetch("/products").then((res) => console.log(res.ok));

const asyncFetch2 = async () => {
    const res = await fetch("/products");
    console.log(res.ok);
};

/* =================== 3. Print the Content-Type Header =================== */

fetch("/products").then((res) => console.log(res.headers.get("Content-Type")));

const asyncFetch3 = async () => {
    const res = await fetch("/products");
    console.log(res.headers.get("Content-Type"));
};

/* ============== 4. Print the body of the response as text =============== */

// fetch("/products")
//     .then((res) => res.text())
//     .then((res) => console.log(res));

fetch("/products")
    .then((responseFromFetch) => responseFromFetch.text())
    .then((htmlText) => console.log(htmlText));

const asyncFetch4 = async () => {
    const res = await fetch("/products");
    const htmlText = await res.text();
    console.log(htmlText);
};

// //! Beware of crazy code
// const asyncFetch4 = async () => {
//     const htmlText = await (await fetch("/products")).text();
//     console.log(htmlText);
// };
