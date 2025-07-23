import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

 // book:Book={id:1,title:"Book1",author: "author"};
  books: Book[]=[
    {id:1, author:"author1", title:"book1"},
    {id:2, author:"author2", title:"book2"},
    {id:3, author:"author3", title:"book3"},
  ]
}
