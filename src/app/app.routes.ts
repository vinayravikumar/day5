import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { IndustryDetailComponent } from './pages/industry-detail/industry-detail.component';
import { NgModule } from '@angular/core';


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
      path: 'industry-detail/:id', component:IndustryDetailComponent
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
