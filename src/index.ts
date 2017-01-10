import {Agenda, Person, Pet} from './agenda';

let agenda = new Agenda();

let person = new Person ('Vesal', 'Fayazi', 'Regeringsgatan 28');
let pet = new Pet ('Rocky', 'Rabbit', 'Stallone');

agenda.addContact (pet);
agenda.addContact (person);

let searchContact = agenda.searchInAgenda('Rabbit');

if (searchContact.length === 1){ 
    console.log(searchContact);
}else{
    console.log('Contact is missing');
}