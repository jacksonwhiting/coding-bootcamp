const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('change', e => {
    note.title = e.target.value;
    saveNotes(notes);
})

bodyElement.addEventListener('change', e => {
    note.body = e.target.value;
    saveNotes(notes);
})

removeElement.addEventListener('click', e => {
    removeNote(noteId);
    saveNotes(notes);
    location.assign('/index.html');
})

console.dir(window)

onclick = e => {
    console.log('the window was clicked');
}