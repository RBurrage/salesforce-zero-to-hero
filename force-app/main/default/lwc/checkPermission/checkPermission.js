import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/viewAllData'
//import myCustomPermission from '@salesforce/customPermission/show_details'

export default class CheckPermission extends LightningElement {
    get hasViewAllDataAvailable(){
        return hasViewAllData
    }
    get hasCustomPermission(){
        return myCustomPermission
    }
}