console.log('Hello from Notes.js');
 const fs = require('fs');
 const _ = require('lodash');

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('notes.json');
    return JSON.parse(noteString);
  }
  catch(e){
    return [];
  }
};


var saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};


var addNote = (title,body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};


var removeNote = (title) => {
  var notes = fetchNotes();
  var note = {
    title
  };

  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var readNote = (title) => {
  var notes = fetchNotes();
  var readNotes = notes.filter((note) => note.title === title);
  return readNotes[0];
};


module.exports = {
  addNote,
  removeNote,
  readNote
}
