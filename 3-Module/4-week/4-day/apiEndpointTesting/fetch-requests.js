/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

fetch("/posts")
    .then((res) => {
        console.log(res.status);
        console.log(res.headers.get("content-type"));
        return res.json();
    })
    .then((res) => console.log(res));

// const runFetch = async () => {
//     const dataArray = await fetch("/posts").then((res) => res.json());

//     const lastObj = dataArray.at(-1);

//     console.log(lastObj.message);
//     return lastObj.message;
// };

const runFetch = async () => {
    const myVal = await fetch("/posts")
        .then((res) => res.json())
        .then((dataArray) => dataArray.at(-1))
        .then((lastObj) => lastObj.message);

    console.log(myVal);
    return myVal;
};

// const runFetch = async () => {
//     const response = await fetch("/posts");
//     const body = await response.json();

//     console.log(response.status);
//     console.log(response.headers.get("content-type"));
//     console.log(body);
// };

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

fetch("/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        message: "Newer and cooler hot take",
    }),
})
    .then((res) => {
        console.log(res.status);
        console.log(res.headers.get("content-type"));
        return res.json();
    })
    .then((res) => console.log(res));
