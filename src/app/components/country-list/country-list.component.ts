import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Country} from "../../objects/country";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Observable<Country[]>
  constructor(private countryService: CountryService) {}
  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }

}
