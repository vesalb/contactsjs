export class Contact {
    private name: string;
    private surname: string;
    private address: string;

    constructor (theName: string, theSurname: string, theAddress: string){
        this.name=theName;
        this.surname=theSurname;
        this.address=theAddress;
    }
    
    public displayContact(surname){
        this.name=surname;
        return this.name + ' ' + this.surname + ' ' + this.address;
    }

}

// export class Agenda extends Contact {
//     constructor(name: string, surname: string, address: string){
//         super(name, surname, address);
//     }

//     public displayContact(surname){
//         console.log('${name}, ${surname} and ${address}')
//     }

// }
