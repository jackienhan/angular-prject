import {Component, ContentChild, OnInit} from '@angular/core';
import {CityComponent} from "../city/city.component";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @ContentChild(CityComponent, {static: false})
  private city: CityComponent;
  title = 'Address';
  constructor() { }

  ngOnInit() {
  }

}
