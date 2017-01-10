interface search{
    (searchValue: string) : boolean;
}

export class Contacts{
    name: string;
    surname: string;
    address: string;

    constructor (name: string, surname: string, address: string){
        this.name=name;
        this.surname=surname;
        this.address=address;
    }

    searchContacts(searchValue: string) {
        if(searchValue === this.surname){
            return true
        } else {
            return false
        }
    }

}

export class Person{
    personName: string;
    personSurname: string;
    personAddress: string;

    constructor (name: string, surname: string, address: string){
        this.personName=name;
        this.personSurname=surname;
        this.personAddress=address;
    }

    searchPeron(searchValue: string) {
        if(searchValue === this.personSurname){
            return true
        } else {
            return false
        }
    }    

}

export class Pet{
    petName: string;
    petType: string;
    petOwner: string;

    constructor (name: string, type: string, owner: string){
        this.petName=name;
        this.petType=type;
        this.petOwner=owner;
    }

    searchPet(searchValue: string) {
        if(searchValue === this.petType){
            return true
        } else {
            return false
        }
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
            if (contact.surname === searchValue){
                return true;
            } else {
                return false
            }
        }
        
    return this.contacts.filter(search);

    }

}
