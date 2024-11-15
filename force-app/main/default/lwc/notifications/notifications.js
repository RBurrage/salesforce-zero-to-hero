import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class Notifications extends LightningElement {

    toastHandler() {
        this.showToast("Success!!", "{0} Account Created!! {1} ", "success")

    }

    toastHandlerTwo() {
        this.showToast("Error!!", "{2} Account Creation Failed {3}", "error")
    }

    toastHandlerThree() {
        this.showToast("Warning!!", "Password should have 15 characters!!", "warning")
    }

    toastHandlerFour() {
        this.showToast("Info!!", "Summer 20 release is available!!", "info")
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',
                {
                    url:'http://www.salesforce.com',
                    label:'Click Here'
                },
                'Whoopsie! ',
                {
                    url:'http://www.amazon.com',
                    label:'Go Shopping Instead'
                }
            ],
            mode:'sticky'
        })
        this.dispatchEvent(event)

    }
}