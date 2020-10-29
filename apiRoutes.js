const fs = require("fs");

//API Routing: 
module.exports = (app) => {
    //Read the `db.json` file and return all saved notes as JSON.
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });

    //Receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post('/api/notes', (req, res) => {
        // get Id of last note if it exists
        let newNote = req.body;
        let lastId;
        if (noteList.length) {
            lastId = Math.max(...(noteList.map(note => note.id)));
            console.log(lastId)
        
        } else {
            lastId = 0;
        }
        
        //Starts the id's at 1
        const id = lastId + 1;
        newNote.id = lastId + 1
        console.log(newNote)
        // pushes the id of the note along with the rest of the text/input of the array in the request.body
        noteList.push(newNote);
        //Removes last index
        res.json(noteList.slice(-1));
    });

    // * DELETE `/api/notes/:id` -
    app.delete('/api/notes/:id', (req, res) => {
        console.log(`trying to delete ${req.params.id}`)
        //finds note by id, then converts the string into a JSON object with the id parameters of the request made
        const deleteId = req.params.id
        noteList = noteList.filter( note => note.id != deleteId )
        console.log(noteList)
        //Delete object matching the index of the note ID
        res.end("Note was deleted");
    });
};