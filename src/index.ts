import {Agenda} from './agenda';
import {Person} from './agenda';
import {Pet} from './agenda';
import {Contacts} from './agenda';


let agenda = new Agenda();

let person1 = new Person ('Vesal', 'Fayazi', 'Regeringsgatan 28');
let person2 = new Person ('Miguel', 'Dominguez', 'Spanish street 5');
let person3 = new Person ('Harry', 'Potter', 'Privet Drive 4');
let pet1 = new Pet ('Teddy', 'Dog', 'Mark');
let pet2 = new Pet ('Molly', 'Cat', 'Walter');
let pet3 = new Pet ('Rocky', 'Rabbit', 'Stallone');

agenda.addContact (person1);
// agenda.addContact (person2);
// agenda.addContact (person3);
// agenda.addContact (pet1);
// agenda.addContact (pet2);
// agenda.addContact (pet3);

let searchContact = agenda.searchInAgenda('Rabbit');

if (searchContact.length == 1){
    console.log(searchContact);
}else{
    console.log('Contact is missing');
}