const router = require('express').Router();
const { savedNotes } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

module.exports = router;