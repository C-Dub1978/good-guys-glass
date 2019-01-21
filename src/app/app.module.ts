import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { MapboxComponent } from './footer/mapbox/mapbox.component';
import { FacebookComponent } from './footer/facebook/facebook.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { NavigationComponent } from './main-body/navigation/navigation.component';
import { HomeComponent } from './main-body/home/home.component';
import { AboutComponent } from './main-body/about/about.component';
import { ServicesComponent } from './main-body/services/services.component';
import { RequestQuoteComponent } from './main-body/request-quote/request-quote.component';
import { WindshieldSafetyComponent } from './main-body/windshield-safety/windshield-safety.component';
import { FiveThingsComponent } from './main-body/five-things/five-things.component';
import { FaqComponent } from './main-body/faq/faq.component';
import { SuccessQuoteComponent } from './main-body/success-quote/success-quote.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    MapboxComponent,
    FacebookComponent,
    MainBodyComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    RequestQuoteComponent,
    WindshieldSafetyComponent,
    FiveThingsComponent,
    FaqComponent,
    SuccessQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
