import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { BookData } from '../model/BookData';

@Injectable({
  providedIn: 'root'
})
export class BooksapiService {

  constructor(private http: HttpClient) { }

  getBookData(bookName: any): Observable<BookData> {
    bookName = bookName.name.replace(/\s/g, '+')
    return this.http.get<BookData>(`${environment.booksApiBaseUrl}/${bookName}`,
      {
        headers: new HttpHeaders().set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue).set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      }
    )
  }
}
