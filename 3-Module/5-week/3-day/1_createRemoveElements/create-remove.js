/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();

        const url = data.message; // URL of new dog image
        console.log(url);

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // const ugly = url.split("breeds/")[1].split("/")[0];
        const breed = url.split("/")[4];
        console.log(breed);

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        const li = document.createElement("li");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");

        // Add source to image
        img.src = url;
        // Add breed to figure caption
        figcaption.innerText = breed;

        // Place img and figcap inside of figure
        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Place figure inside of li
        li.appendChild(figure);

        console.log([li, figure, img, figcaption]);
        console.log(li, figure, img, figcaption);

        /* Add the new dog card as a child to the ul in the .gallery element */
        const ul = document.querySelector("ul");
        ul.appendChild(li);
    } catch (e) {
        console.log("Couldn't fetch dog :(");
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const firstDog = document.querySelector("li");

    /*-------------------- Remove the first dog card --------------------- */
    if (firstDog) {
        firstDog.remove();
    } else {
        window.alert("You already killed all the dogs here, you psycho");
    }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // const lastDog = Array.from(document.querySelectorAll("li")).at(-1);
    const lastDog = document.querySelector("li:last-child");

    /*-------------------- Remove the last dog card ----------------------- */
    if (lastDog) {
        lastDog.remove();
    } else {
        window.alert("You already killed all the dogs here, you psycho");
    }
});
