class Contact {
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
    contacts: Contact[] = [];
    
    public addContact(Contact){
        this.contacts.push(new Contact());
        return this.contacts;
    }

    public searchContactBySurname(searchSurname: string){

            function search(Contact){
                if (Contact.surname === searchSurname){
                    return true;
                } else {
                    return false
                }
            }
        return this.contacts.filter(search);

    }

}
