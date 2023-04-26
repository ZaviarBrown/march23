const myNameExport = require("./myName");
const currTempExport = require("./currTemp");

console.log(myNameExport, "EVIDENCE THAT THIS FILE IS RUNNING");
console.log(currTempExport);

// module.exports = {
//     myNameExport,
//     currTempExport,
// };

// module.exports = myNameExport;
module.exports = {
    ...myNameExport,
    ...currTempExport,
};
