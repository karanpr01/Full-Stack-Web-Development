const {addNote, listNotes, readNote, removeNote} = require('./note.js');

const command = process.argv[2];
const title = process.argv[3];
const body = process.argv[4];


switch (command) {
 case 'add' : addNote(title,body);
 break;

  case 'list' : listNotes();
 break;

  case 'read' : readNote(title);
 break;

  case 'remove' : removeNote(title);
 break;

 default: console.log("❓ Unknown Command, Try: add|list|read|remove ");
 
}