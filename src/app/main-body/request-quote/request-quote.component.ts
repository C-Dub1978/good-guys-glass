import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent implements OnInit {
  years: number[];
  makesAndModels: any;

  constructor() {}

  ngOnInit() {
    this.years = [];
    const beginning = 1980;
    const currentYear = new Date().getFullYear();
    for (let i = beginning; i <= +currentYear; i++) {
      this.years.push(i);
    }

    this.makesAndModels = [
      {'Acura': []},
      {'Alfa Romeo': []},
      {'Aston Martin': []},
      {'Audi': []},
      {'BMW': []},
      {'Buick': []},
      {'Cadillac': []},
      {'Chevrolet': []},
      {'Chrysler': []},
      {'Dodge': []},
      {'Fiat': []},
      {'Ford': []},
      {'GMC': []},
      {'Honda': []},
      {'Hyundai': []},
      {'Hummer': []},
      {'Infiniti': []},
      {'Jaguar': []},
      {'Jeep': []},
      {'Kia': []},
      {'Land Rover': []},
      {'Lexus': []},
      {'Maserati': []},
      {'Mazda': []},
      {'Mercedes-Benz': []},
      {'Mini': []},
      {'Mitsubishi': []},
      {'Nissan': []},
      {'Other': null}
      {'Porsche': []},
      {'Saab': []},
      {'Subaru': []},
      {'Suzuki': []},
      {'Tesla': []},
      {'Toyota': []},
      {'Volkswagen': []},
      {'Volvo': []}
    ];
  }
}
