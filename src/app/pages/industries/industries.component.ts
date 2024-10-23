import { Component } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent {
  // Array containing the card details (image URL and description)
  cards = [
    { image: 'assets/images/card1.jpg', description: 'Description for Card 1' },
    { image: 'assets/images/card2.jpg', description: 'Description for Card 2' },
    { image: 'assets/images/card3.jpg', description: 'Description for Card 3' },
    { image: 'assets/images/card4.jpg', description: 'Description for Card 4' },
    { image: 'assets/images/card5.jpg', description: 'Description for Card 5' },
    { image: 'assets/images/card6.jpg', description: 'Description for Card 6' },
    { image: 'assets/images/card7.jpg', description: 'Description for Card 7' }
  ];
}
