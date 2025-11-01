const fs = require('fs');
const path = require('path');

const notesPath = path.join(__dirname, 'notes.json');

// Load Notes from JSON
function loadNotes() {
    try {
        const data = fs.readFileSync(notesPath, 'utf-8');
        const notes = JSON.parse(data);
        return Array.isArray(notes) ? notes : [];
    } catch (error) {
        return error;
    }
}

// Save Notes to JSON
function saveNotes(notes) {
    fs.writeFileSync(notesPath, JSON.stringify(notes, null, 2));
}

// Add Notes
function addNote(title, body) {
    const notes = loadNotes();
    const duplicate = notes.find(note => note.title === title);

    if(duplicate){
        console.log('❌ Note title already exists');
        return;
    }

    notes.push({title, body});
    saveNotes(notes);
    console.log('✅ Note added Successfully!');
    
}

// List Notes
function listNotes() {
    const notes = loadNotes();
    if(notes.length === 0){
        console.log('No Notes Found😔.');
    }

    console.log('📋 Your Notes:');
    notes.forEach((note, i) => console.log(`${i + 1}. ${note.title}`)
    )
    
}

// Read a Note
function readNote(title) {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if(!note){
        console.log('❌ Note not found');
        return;
    }

    console.log(`\n📘 ${note.title}\n${note.body}\n`);
    
}

// Remove Note 
function removeNote(title) {
    const notes = loadNotes();
    const filtered = notes.filter(note => note.title !== title);

    if(notes.length === filtered.length){
        console.log('❌ NO notes found with that title');
        return;
    }

    saveNotes(filtered);
    console.log('🗑️ Note removed Successfully!');
    
}

module.exports = {addNote, readNote, listNotes, removeNote}