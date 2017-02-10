
interface Contact extends Searchable, Creatable {}

interface Creatable{
    create(objectType:string, param1: string, param2: string, param3: string): Contact;
}

interface Searchable{
    search(searchValue: string) : boolean;
}

interface Serializable{
    serialize(): string;
    deserialize(text: string): void;
}

class Person implements Searchable{

    constructor (private personName: string, private personSurname: string, private personAddress: string){}

    search(searchValue: string) {
        if(searchValue === this.personSurname){
            return true
        } else {
            return false
        }
    }
}

class Pet implements Searchable{

    constructor (private petName: string, private petType: string, private petOwner: string){}

    search(searchValue: string) {
        if(searchValue === this.petType){
            return true;
        } else {
            return false;
        }
    }
}


declare function require(name:string);
let fs = require("fs");

export class Agenda implements Serializable, Creatable{

    public contacts: Contact[] = [];

    public create(objectType, param1, param2, param3){
        let newContact: any;
        if(objectType === 'pet'){
            let newContact = new Pet(param1, param2, param3);
            return newContact;
        }else if(objectType === 'person'){
            let newContact = new Person(param1, param2, param3);
            return newContact;
        }else{
            console.log('Contact type is missing');
        }
        return newContact;
    }

    public addContact(contact: Contact){
        this.contacts.push(contact);
        return this.contacts;
    }

    public searchInAgenda(searchValue: string){
        function search(contact: Searchable){
            return contact.search(searchValue);
        }
        return this.contacts.filter(search);
    }

    public serialize(){
        let saveObj = JSON.stringify(this.contacts);
        fs.writeFileSync('./contacts.json', saveObj);
        return saveObj;
    }

    public deserialize(folderPath){
        let someJson = require(folderPath);
        console.log(someJson);
    }

}