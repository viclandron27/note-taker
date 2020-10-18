const router = require('express').Router();
const savedNotes = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    console.log("GET:", savedNotes)
    let results = savedNotes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

module.exports = router;