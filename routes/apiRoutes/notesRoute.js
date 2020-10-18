const router = require('express').Router();
const  savedNotes  = require('../../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
    console.log("GET:", savedNotes)
    let results = savedNotes;
    // if (req.query) {
    //     results = filterByQuery(req.query, results);
    // }
    res.json(results);
});
router.post('/notes', (req, res) => {
    console.log("POST:", req.body)
    //const savedNotes = saveNote(req.body)
    savedNotes.push(req.body)
    //console.log(savedNotes)
    res.json(savedNotes)

    fs.writeFileSync("db.json", savedNotes);
    
});
router.delete('/notes/:id', (req, res) => {
    console.log("DELETE:", req.params)
});
module.exports = router;