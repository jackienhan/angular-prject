import { Injectable } from '@angular/core';

import {Person} from "../objects/person";

// @ts-ignore
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const PERSONS = [
  new Person(1, 'Mahesh', 'Varanasi'),
  new Person(2, 'Ram', 'Ayodhya'),
  new Person(3, 'Kishna', 'Mathura')
];

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personList$: Observable<Person[]>;
  constructor() { }
  getPersons(): Observable<Person[]> {
    this.personList$ = Observable.of(PERSONS);
    return this.personList$;
  }
  getPerson(id: number): Observable<Person> {
    return this.getPersons()
      .map(persons => persons.find(person => person.personId === id));
  }
  updatePerson(person: Person): Observable<Person> {
    return this.getPersons()
      .map(persons => {
        let personObj = persons.find(ob => ob.personId === person.personId);
        personObj = person;
        return personObj;
      });
  }
}
