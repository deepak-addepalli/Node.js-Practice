const fs = require('fs');
var obj = {
  title : 'some title',
  body : 'some body'
};

var objString = JSON.stringify(obj);

console.log(objString);
fs.writeFileSync('notes.json', objString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(note.title);
console.log(note);
