import {Agenda} from './agenda';
import {Person} from './agenda';

let agenda = new Agenda();

let contact = new Person('Vesal', 'Fayazi', 'Regeringsgatan 28');
let contact1 = new Person('Miguel', 'Dominguez', 'Spanish street 5');
let contact2 = new Person('Harry', 'Potter', 'Privet Drive 4');

agenda.addContact(contact);
agenda.addContact(contact1);
agenda.addContact(contact2);

let searchContact = agenda.searchInAgenda('Potter');

if (searchContact.length == 1){
    console.log(searchContact);
}else{
    console.log('Contact is missing');
}