import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {

    isChildVisible = false

    //==================================================================
    // The following three methods are called during the mounting phase.
    //==================================================================

    // Flows from parent to child
    constructor() {
        super()
        console.log('Parent constructor called.')
    }

    // Flows from parent to child
    connectedCallback() {
        console.log('Parent connectedCallback called.')
    }

    // Flows from child to parent
    renderedCallback() {
        console.log('Parent renderedCallback called.')
    }

    //==================================================================
    // The following method is called during the unmounting phase, 
    // when the component gets removed from the DOM.
    //==================================================================

    // Flows from parent to child
    disconnectedCallback() {
        console.log('Parent disconnectedCallback called.')
    }

    handleClick() {
        this.isChildVisible = !this.isChildVisible
    }

    errorCallback(error, stack) {
        console.log(error.message)
        console.log(stack)
    }
}