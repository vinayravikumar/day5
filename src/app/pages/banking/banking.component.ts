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
      name: 'banking', description: 'The Banking and Financial Services (BFS) Group at NeST Digital has established itself with over two decades of experience as a pioneer and leader in the GCC market by providing payment platform solutions', image: "https://static.vecteezy.com/system/resources/previews/010/518/833/original/digital-finance-and-banking-investment-service-on-microchip-with-cloud-computing-in-futuristic-background-bank-building-with-online-payment-secure-money-and-financial-innovation-technology-vector.jpg",
      title: 'Banking'
    },
    aero: {
      name: 'aero', description: 'NeST Digital partners with prime Global Aerospace OEMs bringing unmatched value to its customers and contributing to evolving modernization of aviation technologies.', image: "https://th.bing.com/th/id/OIP.otJ7v0ZvLJT3ked8BUjFRQHaE8?rs=1&pid=ImgDetMain",
      title: 'Aero'
    },
    health: {
      name: 'health', description: 'NeST Digital offers a range of healthcare software solutions, from patient monitoring to virtual reality simulations for medical training these solutions enhance communication, provide real-time patient information, and increase engagement.', image: "https://cdn.sanity.io/images/0vv8moc6/medec/5e11243a7d8368af0b6294b4a70496222e285cf6-4000x2667.jpg?fit=crop&auto=format",
      title: 'Health'
    },
    insurance: {
      name:'insurance',description:"Leveraging our rich technical & domain expertise and competitive cost advantages, NeST works with Insurance solution platform providers and technology companies.",image:"https://www.investopedia.com/thmb/92iUQbhWVPbrT-2TNr4xw5AcsaI=/1200x800/filters:fill(auto,1)/insurance-faa9df3f80274172970efdd638aca3cb.jpg",title:"Insurance"
      },
    locomotive:{
      name:"locomotive",description:"Our competencies in infotainment and displays, rolling stock body control units, and rolling stock power electronics enable us to meet the evolving needs of the industry",image:"https://th.bing.com/th/id/OIP.n73rwQB9QR-6HwNe1fQ2fAHaE8?rs=1&pid=ImgDetMain",title:"Locomotive"
    },
    mobility:{
      name:"mobility",description:"Providing better solutions for overcoming the challenges of the technology curve, competition and increasing customer expectations.",image:"https://bernardmarr.com/wp-content/uploads/2022/01/The-3-Biggest-Future-Trends-In-Transportation-And-Mobility.jpg",title:"Mobility"
    },
    industrial:{
      name:"industrial",description:"Our three decades of presence in the Manufacturing & Energy segment and the acquired domain knowledge form the foundation of our offerings to our world-leading customers.",image:"https://th.bing.com/th/id/OIP.hj3stlelKaj6mTyFu8ngWwHaEK?rs=1&pid=ImgDetMain",title:"Industry"
    }
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

