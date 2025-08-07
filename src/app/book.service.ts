import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book'; // we want to receive book data fromour backend API. Hence, import book model interface
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7256'; //url to connect to API

  constructor(private http: HttpClient) { }

  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
