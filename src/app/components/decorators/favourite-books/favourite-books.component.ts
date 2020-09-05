import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {BookDirective} from "../decorator/book.directive";

@Component({
  selector: 'app-favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.scss']
})
export class FavouriteBooksComponent implements OnInit {

  @ContentChildren(BookDirective, {descendants: false}) topBooks: QueryList<BookDirective>
  @ContentChildren(BookDirective, {descendants: true}) allBooks: QueryList<BookDirective>
  constructor() { }

  ngOnInit() {
  }

}
