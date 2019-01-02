import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VehicleMakesModelsService } from './vehicle-makes-models.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent implements OnDestroy, OnInit {
  years: number[];
  makes: string[];
  models: string[];
  // Used for the ng-containers in the template to show/hide certain form
  //  inputs
  other = false;

  makeChanged: Subscription;

  quoteForm: FormGroup;

  constructor(private vehicleService: VehicleMakesModelsService) {}

  ngOnDestroy() {
    this.makeChanged.unsubscribe();
  }

  ngOnInit() {
    // Get vehicle makes array from our vehicle service
    this.makes = this.vehicleService.getMakes();
    this.models = [];
    this.years = [];
    const beginning = 1980;
    const currentYear = new Date().getFullYear();
    // Populate the years from 1980 until the current year at this moment
    for (let i = beginning; i <= +currentYear; i++) {
      this.years.push(i);
    }

    // Initialize the formGroup and controls
    this.quoteForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required])
      }),
      vehicleData: new FormGroup({
        yearSelect: new FormControl(),
        makeSelect: new FormControl(),
        modelSelect: new FormControl(),
        other: new FormControl(),
        vin: new FormControl()
      }),
      extraInfo: new FormGroup({
        helpYou: new FormControl(),
        selfPayment: new FormControl(),
        insurancePayment: new FormControl()
      })
    });

    // Subscription to the make html select dropdown, we update the models
    // array with the subscription which updates the models dropdown list
    // dynamically.
    this.makeChanged = this.quoteForm
      .get('vehicleData.makeSelect')
      .valueChanges.subscribe(val => {
        if (val) {
          if (val.toLowerCase() === 'other') {
            this.other = true;
          } else {
            this.other = false;
            this.models = this.vehicleService.getModelsFromMake(val);
          }
        }
      });
  }

  onSubmitQuote() {
    console.log('form submitted: ', this.quoteForm);
  }
}
