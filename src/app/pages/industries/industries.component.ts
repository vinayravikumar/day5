import { CommonModule } from '@angular/common';
import id from '@angular/common/locales/id';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { ArgumentOutOfRangeError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {

  cards = [
    { id:'aero',image:'https://th.bing.com/th/id/OIP.otJ7v0ZvLJT3ked8BUjFRQHaE8?rs=1&pid=ImgDetMain', description: 'Description for Card 1',title:'Aero'},
    { id:'health',image: 'https://cdn.sanity.io/images/0vv8moc6/medec/5e11243a7d8368af0b6294b4a70496222e285cf6-4000x2667.jpg?fit=crop&auto=format', description: 'Description for Card 2',title:'Health'},
    { id:'banking',image: 'https://static.vecteezy.com/system/resources/previews/010/518/833/original/digital-finance-and-banking-investment-service-on-microchip-with-cloud-computing-in-futuristic-background-bank-building-with-online-payment-secure-money-and-financial-innovation-technology-vector.jpg', description: 'Description for Card 3',title:'Banking'},
    { id:'locomotive',image: 'https://th.bing.com/th/id/OIP.n73rwQB9QR-6HwNe1fQ2fAHaE8?rs=1&pid=ImgDetMain', description: 'Description for Card 4',title:'Locomotive' },
    { id:'mobility',image: 'https://bernardmarr.com/wp-content/uploads/2022/01/The-3-Biggest-Future-Trends-In-Transportation-And-Mobility.jpg', description: 'Description for Card 5',title:'Mobility' },
    { id:'insurance',image: 'https://www.investopedia.com/thmb/92iUQbhWVPbrT-2TNr4xw5AcsaI=/1200x800/filters:fill(auto,1)/insurance-faa9df3f80274172970efdd638aca3cb.jpg', description: 'Description for Card 6',title:'Insurance' },
    { id:'industrial',image: 'https://th.bing.com/th/id/OIP.hj3stlelKaj6mTyFu8ngWwHaEK?rs=1&pid=ImgDetMain', description: 'Description for Card 7',title:'Industrial'}
  ];

}
