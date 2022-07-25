const path = require('path');
const router  = require('express').Router();
const fs = require('fs');


//handles the notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
})
//handles all others
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = router