interface Contacts{
    name: string;
    secondAttribute: string;
    thirdAttribute: string;
}

export class Person implements Contacts{
    name: string;
    secondAttribute: string;
    thirdAttribute: string;

    constructor (theName: string, theSurname: string, theAddress: string){
        this.name=theName;
        this.secondAttribute=theSurname;
        this.thirdAttribute=theAddress;
    }

}


export class Agenda {
    public contacts: Contacts[] = [];
    
    public addContact(contact: Contacts){
        this.contacts.push(contact);
        return this.contacts;
    }

    public searchInAgenda(searchValue: string){

        function search(contact: Contacts){
            if (contact.secondAttribute === searchValue){
                return true;
            } else {
                return false
            }
        }
        
    return this.contacts.filter(search);

    }

}
