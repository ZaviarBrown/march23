import fetch from "node-fetch";

// const pokemonMoves = {

// }

// const printPikachuMovesAwaitAndThen = async () => {
//     const pikachuData = await fetch(
//         "https://pokeapi.co/api/v2/pokemon/pikachu"
//     ).then((response) => response.json());

//     const moveList = pikachuData.moves;

//     const rng = () => Math.floor(Math.random() * pikachuData.moves.length);

//     const myPikaMoves = [];

//     for (let i = 0; i < 4; i++) {
//         const num = rng();

//         myPikaMoves.push(moveList[num]);
//     }

//     console.log(myPikaMoves);
// };

// printPikachuMovesAwaitAndThen();

// const pikachuData = fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(
//     (response) => response.json()
// );

// console.log(pikachuData);

//? --------------------------------------------------------------------
//? --------------------------------- async/await only ---------------------------------
//? --------------------------------------------------------------------

// const printPikachuMovesAsyncOnly = async () => {
// const fetchData = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
// const pikachuData = await fetchData.json();

//     const moveList = pikachuData.moves;

//     const rng = () => Math.floor(Math.random() * pikachuData.moves.length);

//     const myPikaMoves = [];

//     for (let i = 0; i < 4; i++) {
//         const num = rng();

//         myPikaMoves.push(moveList[num]);
//     }

//     console.log(myPikaMoves);
// };

// printPikachuMovesAsyncOnly();

//? --------------------------------------------------------------------
//? --------------------------------- .then only ---------------------------------
//? --------------------------------------------------------------------

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then((res) => res.json())
//     .then((pikachuData) => {
//         const moveList = pikachuData.moves;

//         const rng = () => Math.floor(Math.random() * pikachuData.moves.length);

//         const myPikaMoves = [];

//         for (let i = 0; i < 4; i++) {
//             const num = rng();

//             myPikaMoves.push(moveList[num]);
//         }

//         console.log(myPikaMoves);
//     });

fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((res) =>
    console.log(res.json())
);
