const path = require("path");

//HMTL Routing:
module.exports = (app) => {
    //Should return the `notes.html` file.
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });
    
    //Should return the `index.html` file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
};