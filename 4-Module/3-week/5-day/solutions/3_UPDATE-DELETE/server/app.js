// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require("express-async-errors");
require("dotenv").config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require("./db/models");

// Index of all puppies - DO NOT MODIFY
app.get("/puppies", async (req, res, next) => {
    const allPuppies = await Puppy.findAll({ order: [["name", "ASC"]] });

    res.json(allPuppies);
});

// STEP 1: Update a puppy by id
app.put("/puppies/:puppyId", async (req, res, next) => {
    const { ageYrs, weightLbs, microchipped } = req.body;

    const puppyToBeUpdated = await Puppy.findByPk(req.params.puppyId);

    // if (ageYrs) {
    //     puppyToBeUpdated.ageYrs = ageYrs;
    // }
    // if (weightLbs) {
    //     puppyToBeUpdated.weightLbs = weightLbs;
    // }
    // if (microchipped !== undefined) {
    //     puppyToBeUpdated.microchipped = microchipped;
    // }

    // await puppyToBeUpdated.save()

    await puppyToBeUpdated.update({ ageYrs, weightLbs, microchipped });

    res.json({
        message: `Puppy with the name ${puppyToBeUpdated.name} was successfully updated!`,
        puppy: puppyToBeUpdated,
    });
});

// STEP 2: Delete a puppy by id
app.delete("/puppies/:puppyId", async (req, res, next) => {
    const puppyToBeDESTROYYYEEEEDDDD = await Puppy.findByPk(req.params.puppyId);

    if (puppyToBeDESTROYYYEEEEDDDD) await puppyToBeDESTROYYYEEEEDDDD.destroy();
    else res.json({ status: 404, message: "That puppy is already dead :(" });

    res.json({
        message: `You monster, you killed my poor ${puppyToBeDESTROYYYEEEEDDDD.name}!!!!`,
        puppy: puppyToBeDESTROYYYEEEEDDDD,
    });
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
    res.json({
        message: "API server is running",
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log("Server is listening on port", port));
} else {
    module.exports = app;
}
