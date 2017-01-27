// "use strict"
// declare function require(name:string);

// let fs = require("fs");

// // Load
// let someJson = require("../data.json");
// console.log(someJson)

// // Save
// let obj = { a: 1, b: 2 };
// fs.writeFileSync("./data.json", JSON.stringify(obj));


import {Agenda, Person, Pet} from './agenda';

// Create agenda
let agenda = new Agenda();

// Add path
// agenda.deserialize();

// Create new contacts
// APPLY FACTORY PATTERN
let person = new Person ('Vesal', 'Fayazi', 'Regeringsgatan 28');
let pet = new Pet ('Rocky', 'Rabbit', 'Stallone');
let personTwo = new Person ('Betsson', 'Fayazi', 'Regeringsgatan 28');

// Add contacts to agenda
agenda.addContact (pet);
agenda.addContact (person);
agenda.addContact (personTwo);

// Search for contacts in the agenda
let searchContact = agenda.searchInAgenda('Rabbit');

if (searchContact.length === 1){ 
    console.log(searchContact);
}else{
    console.log('Contact is missing');
}

// Save
agenda.serialize();