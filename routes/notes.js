//Packages required for the application
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const fs = require("fs");
const uuidv4 = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// POST Route for a new notes
    notes.post('/', (req, res) => {
        console.log(req.body);
      
        const { text, title,note_id: uuidv4 } = req.body;
      
        if (req.body) {
          const newNote = {
            text,
            title,
            note_id: uuidv4(),
          };
      
          readAndAppend(newNote, './db/db.json');
          res.json(`Tip added successfully 🚀`);
        } else {
          res.error('Error in adding tip');
        }
      });
    

module.exports = notes;
