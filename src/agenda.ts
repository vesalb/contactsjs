// export interface Cs{
//     name: string;
//     secondAttribute: string;
//     thirdAttribute: string;
// }

export class Contact {
    name: string;
    surname: string;
    address: string;

    constructor (theName: string, theSurname: string, theAddress: string){
        this.name=theName;
        this.surname=theSurname;
        this.address=theAddress;
    }

}


export class Agenda {
    public contacts: Contact[] = [];
    
    public addContact(contact: Contact){
        this.contacts.push(contact);
        return this.contacts;
    }

    public searchInAgenda(searchValue: string){

        function search(contact: Contact){
            if (contact.surname === searchValue){
                return true;
            } else {
                return false
            }
        }
        
    return this.contacts.filter(search);

    }

}
