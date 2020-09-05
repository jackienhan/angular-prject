import { Component, OnInit } from '@angular/core';
import {Country} from "../../objects/country";
import { Observable } from 'rxjs/Observable';
import {CountryService} from "../../services/country.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  isAdding = false;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogService: DialogService) { }

    ngOnInit(): void {
    }

  countryForm = this.formBuilder.group({
    name: '',
    capital: '',
    currency: ''
  });

  onFormSubmit() {
    this.isAdding = true;
    let name = this.countryForm.get('name').value;
    let capital = this.countryForm.get('capital').value;
    let currency = this.countryForm.get('currency').value;

    let country = new Country(null, name, capital, currency);
    this.countryService.addCountry(country)
      .subscribe(() =>
        this.router.navigate([ '../list' ], { relativeTo: this.route })
      );
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.isAdding && this.countryForm.dirty) {
      return this.dialogService.confirm('Discard unsaved Country?');
    }
    return true;
  }

}
