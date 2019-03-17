import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VehicleMakesModelsService } from './vehicle-makes-models.service';
import { Subscription, throwError, Observable } from 'rxjs';

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
  postUrl = '../../php/process-form.php';
  submitted = false;
  finalResponse = '';

  makeChanged: Subscription;

  quoteForm: FormGroup;

  constructor(
    private vehicleService: VehicleMakesModelsService,
    private http: HttpClient
  ) {}

  handleError(error: HttpErrorResponse) {
    console.log('error from server: ', error);
    this.finalResponse =
      'There was an error submitting your information, please try again later.';
    return throwError('Error, something went wrong with the form submission');
  }

  ngOnDestroy() {
    this.makeChanged.unsubscribe();
    this.submitted = false;
  }

  ngOnInit() {
    this.submitted = false;
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
    this.submitted = true;
    this.finalResponse = 'Submitting form, please stand by....';
    this.sendPost().subscribe(
      res => {
        this.finalResponse =
          'Thanks for submitting your information, We will get back to you as soon as we can.';
      },
      error => {
        this.handleError(error);
      }
    );
  }

  sendPost(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const userData = this.quoteForm.get('userData');
    const vehicleData = this.quoteForm.get('vehicleData');
    const extraInfo = this.quoteForm.get('extraInfo');

    const formData = {
      name: userData.get('name').value,
      email: userData.get('email').value,
      phone: userData.get('phone').value,
      year: vehicleData.get('yearSelect').value || 'No Year Specified',
      make: vehicleData.get('makeSelect').value || 'No Make Specified',
      model: vehicleData.get('modelSelect').value || 'No Model Specified',
      other: vehicleData.get('other').value || 'No \'Other\' Info Specified',
      vin: vehicleData.get('vin').value || 'No VIN Specified',
      help: extraInfo.get('helpYou').value || 'No TextArea Info Specified',
      self:
        extraInfo.get('selfPayment').value || 'Self-Pay Option Not Specified',
      insurance:
        extraInfo.get('insurancePayment').value ||
        'Insurance-Pay Option Not Specified'
    };

    const payload = 'formData=' + JSON.stringify(formData);

    return this.http.post<any>(this.postUrl, payload, httpOptions);
  }
}
