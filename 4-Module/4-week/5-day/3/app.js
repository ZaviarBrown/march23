require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();

const { WarehouseItem } = require("./db/models");

app.use(express.json());

app.get("/items", async (req, res) => {
    const newItemsOnly = await WarehouseItem.findAll({
        where: { isUsed: false },
    });

    return res.json(newItemsOnly);
});

app.put("/items/:id", async (req, res) => {
    const item = await WarehouseItem.findByPk(req.params.id);

    if (!item) {
        return res.status(404).json({ message: "Warehouse Item not found" });
    }

    const updatedItem = await item.update(req.body);

    return res.json(updatedItem);
});

if (require.main === module) {
    const port = 8003;
    app.listen(port, () => console.log("Server-3 is listening on port", port));
} else {
    module.exports = app;
}
