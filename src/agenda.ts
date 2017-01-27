

interface Searchable{
    search(searchValue:string) : boolean;
}

interface Serializable{
    serialize(): string;
    deserialize(text: string): void;
}

interface Contact extends Searchable {}

export class Person implements Searchable {
    personName: string;
    personSurname: string;
    personAddress: string;

    constructor (name: string, surname: string, address: string){
        this.personName=name;
        this.personSurname=surname;
        this.personAddress=address;
    }

    search(searchValue: string) {
        if(searchValue === this.personSurname){
            return true
        } else {
            return false
        }
    }

}

export class Pet implements Searchable{
    petName: string;
    petType: string;
    petOwner: string;

    constructor (name: string, type: string, owner: string){
        this.petName=name;
        this.petType=type;
        this.petOwner=owner;
    }

    search(searchValue: string) {
        if(searchValue === this.petType){
            return true
        } else {
            return false
        }
    }

}


declare function require(name:string);
let fs = require("fs");

export class Agenda implements Serializable{

    public contacts: Contact[] = [];
    
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
        console.log(typeof(someJson));
    }

}
