import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/viewAllData'

export default class CheckPermission extends LightningElement {
    get hasViewAllDataAvailable(){
        return hasViewAllData
    }
}