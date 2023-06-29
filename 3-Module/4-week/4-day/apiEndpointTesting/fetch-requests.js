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

const myFetchFunc = async () => {
    const response = await fetch("/posts");
    const data = await response.json();

    console.log(response.status);
    console.log(response.headers.get("content-type"));
    console.log(data);
};

const assessmentPractice = async () => {
    const dataArray = await fetch("/posts").then((res) => res.json()); // [{...}, {...}]

    const firstObj = dataArray[0]; // {postId: 1, message: 'Hello World!'}

    console.log(firstObj.message); // 'Hello World!'

    return firstObj.message; // 'Hello World!'
};

const whileTest = () => {
    const data = fetch("/posts");
    fetch("/posts").then((res) => console.log("I resolved!!!"));

    while (!Array.isArray(data)) {
        console.log("Promise pending...");
    }

    console.log("PROMISE DID IT!");
};

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
        message: "Cool hot take",
    }),
})
    .then((res) => {
        console.log(res.status); // 201
        console.log(res.headers.get("content-type")); // application/json
        return res.json();
    })
    .then((body) => console.log(body)); // {postId: 3, message: 'Cool hot take'}
