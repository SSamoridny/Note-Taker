const path = require("path");

//HMTL Routing:
module.exports = (app) => {
    //Return the `notes.html` file.
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, '.public/notes.html'));
    });
    
    //Return the `index.html` file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '.public/index.html'));
    });
};