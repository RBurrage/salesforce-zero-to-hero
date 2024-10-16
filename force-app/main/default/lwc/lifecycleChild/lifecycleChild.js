import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {

    // Flows from child to child
    constructor() {
        super()
        console.log('Child constructor called.')
    }

    // Flows from child to child
    connectedCallback() {
        console.log('Child connectedCallback called.')
        throw new Error('Loading of child component failed.')
    }

    // Flows from child to Child
    renderedCallback() {
        console.log('Child renderedCallback called.')
    }

    // Flows from parent to child
    disconnectedCallback() {
        alert('Child disconnectedCallback called.')
    }
}