export class Contacts{
    name: string;
    surname: string;
    address: string;

    constructor (name: string, surname: string, address: string){
        this.name=name;
        this.surname=surname;
        this.address=address;
    }

}

// export class Person{
//     petName: string;
//     personSurname: string;
//     personAddress: string;

//     constructor (name: string, surname: string, address: string){
//         this.petName=name;
//         this.personSurname=surname;
//         this.personAddress=address;
//     }

// }

// export class Pet{
//     petName: string;
//     petType: string;
//     petOwner: string;

//     constructor (name: string, type: string, owner: string){
//         this.petName=name;
//         this.petType=type;
//         this.petOwner=owner;
//     } 
// }


export class Agenda {
    public contacts: Contacts[] = [];
    
    public addContact(contact: Contacts){
        this.contacts.push(contact);
        return this.contacts;
    }

    public searchInAgenda(searchValue: string){

        function search(contact: Contacts){
            if (contact.surname === searchValue){
                return true;
            } else {
                return false
            }
        }
        
    return this.contacts.filter(search);

    }

}
