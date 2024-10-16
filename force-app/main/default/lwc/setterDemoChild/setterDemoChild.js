import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {    
    userDetail
    @api 
    get detail() {
        return this.userDetail
    }
    set detail(data) {
        //Always update the data with a shallow copy -- never mutate the data
        let newAge = data.age * 2
        this.userDetail = {...data, age:newAge, "location":"Melbourne"}
    }
}