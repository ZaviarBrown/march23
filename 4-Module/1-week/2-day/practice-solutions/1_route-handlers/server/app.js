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
    next();
});

// app.get("/artists", (req, res) => {
//     const artistsData = getAllArtists();

//     res.status(200).json(artistsData);
// });

app.get("/artists", (req, res) => res.json(getAllArtists()));

// app.post(
//     "/artists",
//     (thisCanBeLiterallyAnythingRequest, becauseItsJustAllVariablesResponse) => {
//         const newArtist = addArtist(thisCanBeLiterallyAnythingRequest.body);

//         becauseItsJustAllVariablesResponse.status(201).json(newArtist);
//     }
// );

app.post("/artists", (req, res) => res.status(201).json(addArtist(req.body)));

// DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log("Server is listening on port", port));
} else {
    module.exports = app;
}
