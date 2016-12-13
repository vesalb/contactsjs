import {Agenda} from './agenda';

let agenda = new Agenda();

agenda.addContact();
agenda.addContact();
agenda.addContact();

let contact = agenda.searchContactBySurname('Fay');

console.log(contact);