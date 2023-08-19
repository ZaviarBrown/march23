const express = require("express");
const router = express.Router();

const { Team, Sport, Player } = require("../db/models");

router.get("/:id", async (req, res) => {
    const team = await Team.findByPk(req.params.id, {
        include: [{ model: Sport }, { model: Player, as: "TeamRoster" }],
    });

    return res.json(team);
});

router.post("/:id/players", async (req, res) => {
    const team = await Team.findByPk(req.params.id);

    // const newPlayer = await team.createPlayer(req.body); // After Phase 5
    const newPlayer = await team.createTeamRoster(req.body);

    return res.json(newPlayer);
});

module.exports = router;
