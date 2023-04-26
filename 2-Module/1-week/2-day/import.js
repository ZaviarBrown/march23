// const myImports = require("./export");

// console.log(myImports);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const importedObject = require("./export");
// const firstName = importedObject.firstName;
// const tempInF = importedObject.currTemp;

// console.log(firstName); // 'Zaviar'
// console.log(tempInF); // 91

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const { firstName, currTemp: tempInF } = require("./export");

// console.log(firstName); // 'Zaviar'
// console.log(tempInF); // 91

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const myImports = require("./gigaExport");

// console.log(myImports);
// console.log(myImports.myNameExport.firstName);
// console.log(myImports.currTempExport.currTemp);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const {
//     myNameExport,
//     currTempExport: { currTemp },
// } = require("./gigaExport");

// console.log(myNameExport.firstName);
// console.log(currTemp);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const myImports = require("./gigaExport");

// myImports.myNameExport.firstName = "Elden Ring";
// console.log(myImports);

// const otherImports = require("./gigaExport");

// console.log(otherImports);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const myImports = require("./gigaExport");
// const importClone = { ...myImports };

// console.log(myImports);

// myImports.color = "blue";

// console.log(myImports);
// console.log(importClone);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// let name = "Brown, ";

// name += require("./gigaExport/myName");

// console.log(name);
