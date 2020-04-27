const fs = require('fs')
const chaulk = require('chalk')

const getNotes = function() {
    return 'These are the damn notes:'
}

const addNotes = function(title, body) {

    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0 ) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note has been added')
    } else {
        console.log('Note title taken!')
    }
    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function (title) {
    // console.log(title)
    const notes = loadNotes()
    const findNote = notes.filter(function (note) {
        return note.title !== title
    })

    if ( note.length > findNote.length) { 
        console.log(chaulk.blue('Victory is ours'))
        saveNotes(findNote)
    } else {
        console.log(chaulk.red('I have failed you'))
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
       
    }catch(e) {
        return []
    }  
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote
}