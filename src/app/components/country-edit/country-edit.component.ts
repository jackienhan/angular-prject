import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import {Country} from "../../objects/country";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.scss']
})
export class CountryEditComponent implements OnInit {
  country: Country;
  countryForm: FormGroup;
  isUpdating = false;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.countryService.getCountry(+params['country-id']))
      .subscribe(country => {
        this.country = country;
        this.createForm(country);
      });
  }
  createForm(country: Country) {
    this.countryForm = this.formBuilder.group({
      name: country.countryName,
      capital: country.capital,
      currency: country.currency
    });
  }
  onFormSubmit() {
    this.isUpdating = true;
    this.country.countryName = this.countryForm.get('name').value;
    this.country.capital = this.countryForm.get('capital').value;
    this.country.currency = this.countryForm.get('currency').value;

    this.countryService.updateCountry(this.country)
      .subscribe(() =>
        this.router.navigate([ '../../' ], { relativeTo: this.route })
      );
  }

}
