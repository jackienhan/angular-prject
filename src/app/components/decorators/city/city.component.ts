import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() cityId: string;
  @Input() cityName: string;
  constructor() { }

  ngOnInit() {
  }

}
