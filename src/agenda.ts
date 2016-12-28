interface Contacts{
    name: string;
    secondAttribute: string;
    thirdAttribute: string;
}

export class Person implements Contacts{
    name: string;
    secondAttribute: string;
    thirdAttribute: string;

    constructor (personName: string, personSurname: string, personAddress: string){
        this.name=personName;
        this.secondAttribute=personSurname;
        this.thirdAttribute=personAddress;
    }

}

export class Pet implements Contacts{
    name: string;
    secondAttribute: string;
    thirdAttribute: string;

    

    constructor (petName: string, petType: string, petOwner: string){
        this.name=petName;
        this.secondAttribute=petType;
        this.thirdAttribute=petOwner;
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
