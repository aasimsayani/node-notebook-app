const add = require('./Notes-App/utils.js')
const getNotes = require('./Notes-App/notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

// getNotes()

// console.log(validator.isEmail('aasim@envoy.com'))

// const command = process.argv[2]

//Customize yargs version number
// yargs.version('1.0.1')

// Create add command 
yargs.command({
    command: 'add',
    describe: 'What does this do? It adds',
    builder: {
        title: {
            describe: 'Note Tile',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'body of the command',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'What does this do? It removes',
    handler: function() {
        console.log('removing a new not')
    }
})

// Create read command 
yargs.command({
    command: 'read',
    describe: 'What does this do? It reads a note',
    handler: function() {
        console.log('reading a note a new not')
    }
})
// Create list command 
yargs.command({
    command: 'list',
    describe: 'What does this do? It lists the notes',
    handler: function() {
        console.log('list of the notes')
    }
})

yargs.parse()