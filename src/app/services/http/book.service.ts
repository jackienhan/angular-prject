import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private headerApplicationJson = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  url = '/api'
  constructor(private http: HttpClient) {}

  doGet(): Observable<any>  {
    return this.http.get(this.url, {headers: this.headerApplicationJson})
  }
  doPost(body: any, params?: {}): Observable<any> {
    return this.http.post<any>(this.url, body, {headers: this.headerApplicationJson});
  }

  searchByCorpNumberOrName(corpInformation: any): Observable<any> {
    return this.doGet()
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError = error => {
    return throwError(error);
  }
}
