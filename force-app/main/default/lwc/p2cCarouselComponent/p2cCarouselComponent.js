import { LightningElement, api } from 'lwc';

export default class P2cCarouselComponent extends LightningElement {
    @api carouselDetails = [
        {
            header: 'Slide 1',
            src: 'https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
            description: 'Slide 1 description'
        },
        {
            header: 'Slide 2',
            src: 'https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg',
            description: 'Slide 2 description'
        },
        {
            header: 'Slide 3',
            src: 'https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg',
            description: 'Slide 3 description'
        },
    ]
}