import {Agenda} from './agenda';
import {Contacts} from './agenda';
import {Person} from './agenda';
// import {Pet} from './agenda';



let agenda = new Agenda();

let contact = new Contacts('vesal2', 'vesal1', 'vesal3');
// let person = new Person ('Vesal', 'Fayazi', 'Regeringsgatan 28');
// let pet = new Pet ('Rocky', 'Rabbit', 'Stallone');

agenda.addContact (contact);
// agenda.addContact (person);
// agenda.addContact (pet);

let searchContact = agenda.searchInAgenda('vesal1');

if (searchContact.length == 1){
    console.log(searchContact);
}else{
    console.log('Contact is missing');
}