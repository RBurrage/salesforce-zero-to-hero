import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}
    correctAnswers = 0
    isSubmitted = false

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    myQuestions=[
        {
            id: "Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id: "Question2",
            question:"Which file is invalid in the LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id: "Question3",
            question:"Which of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    changeHandler(event){
        console.log("name", event.target.name)
        console.log("value", event.target.value)

        const {name, value} = event.target
        /* above const is shorthand for... 
         const name = event.target.name
         const value = event.target.value
        */

         this.selected={...this.selected, [name]:value}

         console.log(this.allNotSelected) //returns true when an answer for each qeustion is selected
    }

    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log("Correct Answers: ", this.correctAnswers)
    }

    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}