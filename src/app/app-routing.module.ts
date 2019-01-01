import { FaqComponent } from './main-body/faq/faq.component';
import { FiveThingsComponent } from './main-body/five-things/five-things.component';
import { WindshieldSafetyComponent } from './main-body/windshield-safety/windshield-safety.component';
import { RequestQuoteComponent } from './main-body/request-quote/request-quote.component';
import { ServicesComponent } from './main-body/services/services.component';
import { AboutComponent } from './main-body/about/about.component';
import { HomeComponent } from './main-body/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'quote', component: RequestQuoteComponent },
  { path: 'safety', component: WindshieldSafetyComponent },
  { path: 'five-things', component: FiveThingsComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
