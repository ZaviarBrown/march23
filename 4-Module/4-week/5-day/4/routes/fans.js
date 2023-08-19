const express = require("express");
const router = express.Router();

const { Fan, Player } = require("../db/models");

router.get("/:fanId/drafts", async (req, res) => {
    const fan = await Fan.findByPk(req.params.fanId);

    const draftPicks = await fan.getPlayers();

    return res.json(draftPicks);

    // const fan = await Fan.findByPk(req.params.fanId, {
    //     include: Player,
    // });

    // return res.json(fan.Players);
});

router.delete("/:id", async (req, res) => {
    const fan = await Fan.findByPk(req.params.id);

    await fan.destroy();

    return res.json({ message: "Successfully deleted" });
});



module.exports = router;
