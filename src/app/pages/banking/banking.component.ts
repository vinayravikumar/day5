import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss'
})
export class BankingComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  data: { name: string; description: string, image: string, title: string } | undefined;

  dataMap: Record<string, { name: string; description: string, image:string , title:string }> = {
    banking: {
      name: 'banking', description: 'This is banking content', image: "",
      title: 'Banking'
    },
    aero: {
      name: 'aero', description: 'This is aero content', image: "",
      title: 'Aero'
    },
    health: {
      name: 'health', description: 'This is health content', image: "imagelnk",
      title: 'Health'
    },
    // infra: {}
  };

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name');
    console.log('Route ID:', id); // Debug log

    // Loop through the dataMap to find a matching name
    for (const entry of Object.values(this.dataMap)) {
      console.log(entry);

      if (entry.name === id) {
        this.data = this.dataMap[id];
        console.log('Data assigned:', this.data); // Debug log
        break;
      }
    }

    if (!this.data) {
      console.error('No matching data found, navigating to error page.');
      this.router.navigate(['/error']);
    }
  }
}

