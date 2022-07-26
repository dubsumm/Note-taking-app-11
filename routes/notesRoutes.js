const router = require("express").Router();
const fs = require("fs");
const uuid = require("../helpers/uuid");

//GET request
router.get("/notes", (req, res) => {
  let response = fs.readFileSync("./db/db.json");
  response = JSON.parse(response);
  res.json(response);
  console.log(response);
});

// POST request
router.post("/notes", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = { title, text, id: uuid() };
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        let parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(parsedNotes, null, 2), (throwError) =>
        throwError ? console.error(throwError) : console.info('Posted Note!'));
      }
    });
    const response = {
      status: "VUNDERBAR",
      body: newNote,
    };
    res.status(201).json(response);
  } else {
    res.status(500).json('Make sure to add a title or text');
  };
});

// DELETE request

module.exports = router;
