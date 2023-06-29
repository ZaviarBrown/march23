import fetch from "node-fetch";

// const printPikachuMoves = async () => {
//     const pikaData = await fetch(
//         "https://pokeapi.co/api/v2/pokemon/pikachu"
//     ).then((res) => res.json());

//     const allMoves = pikaData.moves;

//     const rng = () => Math.floor(Math.random() * allMoves.length);

//     const pikaMoveset = [];

//     for (let i = 0; i < 4; i++) {
//         const newMove = allMoves[rng()];

//         pikaMoveset.push(newMove);
//     }

//     console.log(pikaMoveset);
// };

// printPikachuMoves();

//? --------------------------------------------------------------------
//? --------------------------------- async/await only ---------------------------------
//? --------------------------------------------------------------------

const printPikachuMoves = async () => {
    const fetchData = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const pikaData = await fetchData.json();

    const allMoves = pikaData.moves;

    const rng = () => Math.floor(Math.random() * allMoves.length);

    const pikaMoveset = [];

    for (let i = 0; i < 4; i++) {
        const newMove = allMoves[rng()];

        pikaMoveset.push(newMove);
    }

    console.log(pikaMoveset);
};

// printPikachuMoves();

//? --------------------------------------------------------------------
//? --------------------------------- .then() only ---------------------------------
//? --------------------------------------------------------------------

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((res) => res.json())
    .then((pikaData) => {
        const allMoves = pikaData.moves;

        const rng = () => Math.floor(Math.random() * allMoves.length);

        const pikaMoveset = [];

        for (let i = 0; i < 4; i++) {
            const newMove = allMoves[rng()];

            pikaMoveset.push(newMove);
        }

        console.log(pikaMoveset);
    });
