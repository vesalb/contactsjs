import {Agenda} from './agenda';

// Create agenda
let agenda = new Agenda();

// Load file
agenda.deserialize('../contacts.json');

let pet = agenda.create('pet', 'Rocky', 'Rabbit', 'Stallone');
let person = agenda.create('person', 'Vesal', 'Fayazi', 'Regeringsgatan 28');

// Add contacts to agenda
agenda.addContact(pet);
agenda.addContact(person);

// // Search for contacts in the agenda
let searchContact = agenda.searchInAgenda('Rabbit');

if (searchContact.length === 1){ 
    console.log(searchContact);
}else{
    console.log('Contact is missing');
}

// Save file
agenda.serialize();