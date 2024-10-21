import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api:ApiService){}
  products:any=""
 ngOnInit(){
    this.api.getData().subscribe((data:any)=>{this.products=data

console.log(this.products);


    })
  }
}
