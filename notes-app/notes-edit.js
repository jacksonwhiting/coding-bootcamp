const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const lastEditedSpan = document.querySelector('#lastEdited')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)

let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
lastEditedSpan.textContent = noteUpdated(note.updatedAt)

titleElement.addEventListener('input', e => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEditedSpan.textContent = noteUpdated(note.updatedAt)
    saveNotes(notes);
})

bodyElement.addEventListener('input', e => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEditedSpan.textContent = noteUpdated(note.updatedAt)
    saveNotes(notes);
})

removeElement.addEventListener('click', e => {
    removeNote(noteId);
    saveNotes(notes);
    location.assign('/index.html');
})

window.addEventListener('storage', function (e) {
    console.log('something changed');
    console.log(e.newValue);
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find(function (note) {
            return note.id === noteId
        })
        console.log(note);

        if (note === undefined) {
            location.assign('/index.html')
        }

        titleElement.value = note.title;
        bodyElement.value = note.body;
        lastEditedSpan.textContent = noteUpdated(note.updatedAt)
    }
    console.log(notes);
})