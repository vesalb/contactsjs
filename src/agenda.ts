class Contact {
    name: string;
    surname: string;
    address: string;

    constructor (theName: string, theSurname: string, theAddress: string){
        this.name=theName;
        this.surname=theSurname;
        this.address=theAddress;
    }
    
    // public displayContact(surname){
    //     this.surname=surname;
    //     return this.name + ' ' + this.surname + ' ' + this.address;
    // }

}


export class Agenda {
    contacts: Contact[] = [];
    
    public addContact(newName: string, newSurname: string, newAddress: string){
        this.contacts.push(new Contact(newName, newSurname, newAddress));
        return this.contacts;
    }

    public displayContactFromAgenda(surname){
        this.contacts
    }

}
