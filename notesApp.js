const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');
const deletedNotesDiv = document.getElementById('deletedNotes');

showNotes();
// local storage vs session storage
// JSON: JavaScript Object Notation

function addNotes(){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        notes = [];
    }else{
        notes = JSON.parse(notes);
    }

    if(addText.value == ''){
        alert('Add your note');
        return;
    }
    
    const noteObj = {
        title: addTitle.value,
        text: addText.value,
    }
    addTitle.value = '';
    addText.value = '';
    notes.push(noteObj);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function showNotes(){
    let notesHTML = '';
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    for(let i=0; i<notes.length; i++){
        notesHTML += `<div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <span class="title">${notes[i].title === "" ? 'Note' : notes[i].title}</span>
                    <div class="text">${notes[i].text}</div>
                </div>
        `
    }
    notesDiv.innerHTML = notesHTML;
}

function deleteNote(ind){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}
addNoteButton.addEventListener('click', addNotes);


// assignment

/*
1. delete notes: implementation delete array
2. Archieve Notes: implementation archieve array
3. sorting filter, iterate through all the notes, and check 
4. reminder
5. edit note
*/

// 1. delete notes: implementation delete array

function showDeletedNotes(){
    let deletedNotesHTML = '';
    let deletedNotes = localStorage.getItem('deletedNotes');
    if(deletedNotes === null){
        return;
    }else{
        deletedNotes = JSON.parse(deletedNotes);
    }
    for(let i=0; i<deletedNotes.length; i++){
        deletedNotesHTML += `<div class="note deleted">
                    <span class="title">${deletedNotes[i].title === "" ? 'Note' : deletedNotes[i].title}</span>
                    <div class="text">${deletedNotes[i].text}</div>
                    <div class="deletedDate">${new Date(deletedNotes[i].deleted).toLocaleString()}</div>
                </div>
        `
    }
    deletedNotesDiv.innerHTML = deletedNotesHTML;
}
