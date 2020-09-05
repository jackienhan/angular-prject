import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isLoading = true;
  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  ngOnInit() {
  }

}
