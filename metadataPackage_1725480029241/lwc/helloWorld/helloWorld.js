import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // DATA BINDING EXAMPLE
    fullname="Zero to Hero"
    title="aura"

    changeHandler(event) {
        this.title = event.target.value
    }
    
    // TRACK BINDING EXAMPLE
    // use @track with arrays or objects to track the items in each -- mutates the array
    //------------------------------------------------------------------------------------
    // @track address = { 
    //     city: 'Melbourne',
    //     postcode: '02110',
    //     country: 'Austrailia'
    // }   

    // trackHandler(event) {
    // this.address.city = event.target.value} 
    // }
    //------------------------------------------------------------------------------------


    // BETTER APPROACH: Instead of @track -- does not mutate the array
    //------------------------------------------------------------------------------------
    address = {
        city: 'Melbourne',
        postcode: '02110',
        country: 'Austrailia'
    }

    trackHandler(event) {
        this.address = {...this.address, "city":event.target.value} 
    }
    //------------------------------------------------------------------------------------

    // GETTER EXAMPLE
    users = ["john", "smith", "nik"]
    num1 = 10
    num2 = 20

    get firstUser() {
        return this.users[0].toUpperCase();
    }

    get multiply() {
        return this.num1 * this.num2
    }

    // CONDITIONAL RENDERING EXAMPLE
    

}