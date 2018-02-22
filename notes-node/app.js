const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');

const yargs = require('yargs');
const argv = yargs.command('add','Add new note',{
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Title of body',
    demand: true,
    alias: 'b'
  }
})
.command('read', 'read a note' {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  } 
})
.help()
.argv;

var command = argv._[0];

if(command === "add"){
  var note = notes.addNote(argv.title, argv.body);
  if(note!==undefined){
    console.log(note.title);
    console.log("Success!");
  }

  else{
    console.log("Note Title already exsits!");
  }
}

else if(command==="remove"){
  var msg = notes.removeNote(argv.title);
    console.log(msg ? 'Note Removed' : 'No note exists with that title');
}

else if(command==="read"){
  var note = notes.readNote(argv.title);
  console.log(note ? 'Note Found ' + note.title : 'Note not found');
}
