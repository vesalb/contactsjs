class Contact {
    name: string;
    surname: string;
    address: string;

    constructor (theName: string, theSurname: string, theAddress: string) {
        this.name=theName;
        this.surname=theSurname;
        this.address=theAddress;
    }
}

export class Agenda extends Contact {
    constructor(name: string, surname: string, address: string){
        super(name, surname, address);
    }

    public displayContact(surname){
        console.log('${name}, ${surname} and ${address}')
    }

}