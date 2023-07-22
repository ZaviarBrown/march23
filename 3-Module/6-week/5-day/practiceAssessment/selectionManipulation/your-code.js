/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

const firstSquare = document.getElementById("problem-one");
firstSquare.innerHTML = "<button>1</button>";

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

const secondSquare = document.querySelector(".two");
secondSquare.style =
    "background-color: orange; color: white; border: 5px dashed black;";

// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.
const width = "100px";
const fontSize = "60px";

const plusSquares = Array.from(document.getElementsByClassName("plus"));

plusSquares.forEach((el) => {
    el.style.width = width;
    el.style.fontSize = fontSize;
});

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

const fourthSquare = document.querySelector(".four");

fourthSquare.id = "problem-four";
// fourthSquare.className = "round four";
fourthSquare.setAttribute("class", "round four");

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

const fifthSquare = document.querySelector("#root div:nth-child(5)");
fifthSquare.classList.add("minus");

const minusSquares = document.querySelectorAll(".minus");

minusSquares.forEach((el) => el.remove());
