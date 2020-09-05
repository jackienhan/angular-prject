import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../../objects/person";
import {PersonService} from "../../services/person.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons: Observable<Person[]>
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) {}
  ngOnInit() {
    this.persons = this.personService.getPersons();
  }
  goToEdit(person:Person) {
    this.router.navigate([ person.personId ], { relativeTo: this.route });
  }
}
