import {Agenda} from './agenda';
import {Contact} from './agenda';

let agenda = new Agenda();

let contact = new Contact('Vesal', 'Fayazi', 'Regeringsgatan 28');
let contact1 = new Contact('Miguel', 'Dominguez', 'Spanish street 5');
let contact2 = new Contact('Poop', 'Hat', 'Diarrhea alley 24');

agenda.addContact(contact);
agenda.addContact(contact1);
agenda.addContact(contact2);

let searchContact = agenda.searchContactBySurname('Hat');

console.log(searchContact);