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
    //     this.name=surname;
    //     return this.name + ' ' + this.surname + ' ' + this.address;
    // }

}

export class Agenda extends Contact {

    constructor(name: string, surname: string, address: string){
        super(name, surname, address);
    }

    public displayContactFromAgenda(surname){
        this.surname=surname;
        return this.name + ' ' + this.surname + ' ' + this.address;
    }

}
