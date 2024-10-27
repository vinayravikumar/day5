import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BankingComponent } from './pages/banking/banking.component';


export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
      path: 'industries', component:IndustriesComponent
    },
    {
      path:'contact',component:ContactComponent
    },
    {
      path:'about',component:AboutComponent
    },
    {
        path: '**', component:NotfoundComponent
    },
    {
      path: 'industries/:name', component:BankingComponent
    }
];

