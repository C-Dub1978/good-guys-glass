import { VehicleMakesModelsService } from './vehicle-makes-models.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent implements OnInit {
  years: number[];
  makes: string[];

  constructor(private vehicleService: VehicleMakesModelsService) {}

  ngOnInit() {
    this.makes = this.vehicleService.getMakes();
    this.years = [];
    const beginning = 1980;
    const currentYear = new Date().getFullYear();

    for (let i = beginning; i <= +currentYear; i++) {
      this.years.push(i);
    }
  }
}
