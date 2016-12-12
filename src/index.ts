import {Agenda} from './agenda';

let agenda = new Agenda();

agenda.addContact('Vesal', 'Fayazi', 'Regeringsgatan 28');
agenda.addContact('Ves', 'Fay', 'T-centralen');
agenda.addContact('Fayazi', 'Vesal', 'Sveavägen 50')

console.log(agenda.displayContactFromAgenda('Fay'));