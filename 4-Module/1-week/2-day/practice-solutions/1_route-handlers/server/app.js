// Phase 2
const {
    getAllArtists,
    getLatestArtist,
    getArtistByArtistId,
    addArtist,
    editArtistByArtistId,
    deleteArtistByArtistId,
    getAlbumsForLatestArtist,
    getAlbumsByArtistId,
    getAlbumByAlbumId,
    addAlbumByArtistId,
    editAlbumByAlbumId,
    deleteAlbumByAlbumId,
    getFilteredAlbums,
    getSongsByArtistId,
    getSongsByAlbumId,
    getSongBySongId,
    addSongByAlbumId,
    editSongBySongId,
    deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request Body:", req.body);
    console.log("Extra line here :)");
    next();
});

// app.get("/artists", (anyNameIWantRequest, literallyDoesNotMatterResponse) => {
//     literallyDoesNotMatterResponse.status(200).json(getAllArtists());
// });

app.get("/artists", (req, res) => {
    res.status(200).json(getAllArtists());
});

// app.post("/artists", (req, res) => {
//     const newArtist = addArtist(req.body);

//     res.status(201);
//     res.json(newArtist);
// });

app.post("/artists", (req, res) => res.status(201).json(addArtist(req.body)));

// DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log("Server is listening on port", port));
} else {
    module.exports = app;
}
