const cookieFinder = (cookey) => {
    const cookie = document.cookie
        .split("; ")
        .find((el) => el.startsWith(cookey + "="));

    if (cookie) {
        return cookie.split("=").pop();
    }
    return null;
};

window.addEventListener("DOMContentLoaded", () => {
    //! --------------------------------------------------------------------
    //*                              Problem 1
    //! --------------------------------------------------------------------

    const blueButton = document.getElementById("make-circle-blue");
    const blueDiv = document.getElementById("blue-border-circle");

    blueButton.addEventListener("click", () => {
        // blueDiv.className = "blue-fill";
        blueDiv.classList.add("blue-fill");
    });

    //! --------------------------------------------------------------------
    //*                              Problem 2
    //! --------------------------------------------------------------------

    const checkBox = document.querySelector("#will-not-check");

    checkBox.addEventListener("click", (e) => e.preventDefault());

    //! --------------------------------------------------------------------
    //*                              Problem 3
    //! --------------------------------------------------------------------

    const bananaButton = document.getElementById("change-bananas-status");
    const bananaDiv = document.getElementById("bananas-div");
    const bananaImage = document.querySelector("#bananas-image-div");

    bananaButton.addEventListener("click", () => {
        bananaDiv.innerHTML = "No Bananas Today!";

        // if (bananaImage.children.length === 0) {
        if (!bananaImage.children.length) {
            const img = document.createElement("img");

            img.src = "./images/no-bananas.png";
            bananaImage.appendChild(img);
        }
    });

    //? ------------------------- Remove Event Listener -----------------------

    // const addAndRemove = () => {
    //     bananaDiv.innerHTML = "No Bananas Today!";

    //     const img = document.createElement("img");

    //     img.src = "./images/no-bananas.png";
    //     bananaImage.appendChild(img);

    //     bananaButton.removeEventListener("click", addAndRemove);
    // };

    // bananaButton.addEventListener("click", addAndRemove);

    //! --------------------------------------------------------------------
    //*                              Problem 4
    //! --------------------------------------------------------------------

    const cookieInput = document.getElementById("fav-cookie");
    const cookieButton = document.getElementById("store-cookie");

    if (document.cookie) {
        // const cookieVal = document.cookie.split("=").pop();
        const cookieVal = cookieFinder("favCookie");

        cookieInput.value = cookieVal;
    }

    cookieButton.addEventListener("click", () => {
        document.cookie = `favCookie=${cookieInput.value}; max-age=${60 * 30}`;
    });

    //! --------------------------------------------------------------------
    //*                              Problem 5
    //! --------------------------------------------------------------------

    const pieUl = document.getElementsByClassName("pie-list")[0];
    const pieInput = document.getElementById("pie-type");
    const pieButton = document.getElementById("save-pie");

    pieButton.addEventListener("click", () => {
        if (!pieInput.value) return;

        if (pieUl.children.length >= 5) return;

        const pieLi = document.createElement("li");
        pieLi.innerText = pieInput.value;
        pieUl.appendChild(pieLi);

        pieInput.value = "";
    });

    //! --------------------------------------------------------------------
    //*                              Problem 6
    //! --------------------------------------------------------------------

    const iceCreamInput = document.getElementById("fav-ice-cream");
    const iceCreamButton = document.getElementById("save-ice-cream");

    const currFavIceCream = localStorage.getItem("Fav Ice Cream");

    if (currFavIceCream) {
        iceCreamInput.value = currFavIceCream;
        // console.log(localStorage["Fav Ice Cream"]);
    }

    iceCreamButton.addEventListener("click", () => {
        localStorage.setItem("Fav Ice Cream", iceCreamInput.value);
    });

    //! --------------------------------------------------------------------
    //*                              Problem 7
    //! --------------------------------------------------------------------

    const appleButton = document.getElementById("add-apple");
    const orangeButton = document.getElementById("add-orange");
    const emptyButton = document.getElementById("reset-basket");
    const fruitDiv = document.getElementById("fruit-storage");
    const fruitSpan = document.getElementById("total-fruit");

    const addFruit = () =>
        (fruitSpan.innerText = Number(fruitSpan.innerText) + 1);

    const resetFruit = () => {
        fruitSpan.innerText = 0;
        fruitDiv.innerText = "";
    };

    resetFruit();

    appleButton.addEventListener("click", () => {
        if (fruitSpan.innerText === "25") return;
        fruitDiv.innerText += "🍎";
        addFruit();
    });

    orangeButton.addEventListener("click", () => {
        if (fruitSpan.innerText === "25") return;

        fruitDiv.innerText += "🍊";
        addFruit();
    });

    emptyButton.addEventListener("click", resetFruit);

    //! --------------------------------------------------------------------
    //*                              Problem 8
    //! --------------------------------------------------------------------

    document
        .getElementById("bubble-maker")
        .addEventListener("click", (e) => e.stopPropagation());

    //! --------------------------------------------------------------------
    //*                              Problem 9
    //! --------------------------------------------------------------------

    const fetchButton = document.getElementById("dictionary-fetch");
    const resultsDiv = document.getElementById("results-area");
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/dictionary";

    fetchButton.addEventListener("click", async () => {
        //? ------------------------ Data Fetching From Api --------------------
        const response = await fetch(url);
        const data = await response.json();
        const dictionaryObject = data[0];
        const word = dictionaryObject.word;
        const definition =
            dictionaryObject.meanings[0].definitions[0].definition;

        //? ------------------------ Adding Data To Results --------------------

        const resultsUl = document.createElement("ul");
        const wordLi = document.createElement("li");
        const definitionLi = document.createElement("li");

        wordLi.innerText = `Word: ${word}`;
        definitionLi.innerText = `Definition: ${definition}`;

        resultsUl.appendChild(wordLi);
        resultsUl.appendChild(definitionLi);

        resultsDiv.appendChild(resultsUl);
    });

    //! --------------------------------------------------------------------
    //*        Technically breaking the rules but .then version
    //! --------------------------------------------------------------------

    // fetch(url)
    //     .then((res) => res.json())
    //     .then((res) => {
    //         fetchButton.addEventListener("click", () => {
    //             //? ------------------------ Data Fetching From Api --------------------

    //             const dictionaryObject = res[0];
    //             const word = dictionaryObject.word;
    //             const definition =
    //                 dictionaryObject.meanings[0].definitions[0].definition;

    //             //? ------------------------ Adding Data To Results --------------------

    //             const resultsUl = document.createElement("ul");
    //             const wordLi = document.createElement("li");
    //             const definitionLi = document.createElement("li");

    //             wordLi.innerText = `Word: ${word}`;
    //             definitionLi.innerText = `Definition: ${definition}`;

    //             resultsUl.appendChild(wordLi);
    //             resultsUl.appendChild(definitionLi);

    //             resultsDiv.appendChild(resultsUl);
    //         });
    //     });
});
