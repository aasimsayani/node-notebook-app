const fs = require('fs')

//example code
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
// }

// const stringifyBook = JSON.stringify(book)
// fs.writeFileSync('1-json.json', stringifyBook)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()

// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data)

// let newData = {
//     name: 'Aasim',
//     age: 2000,
//     planet: 'Earth'
// }

data.name = 'Nick'
data.age = 220

const dataString = JSON.stringify(data)

const updatedData = fs.writeFileSync('1-json.json', dataString)
console.log(dataString)
