import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookData } from 'src/app/model/BookData';
import { Book } from 'src/app/service/book';
import { BooksapiService } from 'src/app/service/booksapi.service';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  bookForm2: FormGroup;
  searchResults: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudApi: CrudService,
    private booksApi: BooksapiService
  ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      rating: [''],
    })
    {
      this.bookForm2 = this.formBuilder.group({
        name: ['']
      })
    }
  }

  ngOnInit(): void {
  }

  getBookData(): any {
    this.booksApi.getBookData(this.bookForm2.value).subscribe(
      data => {
        console.log(data)
        this.searchResults = data
      }
    )
  }

  addBook(book: Book): any {
    this.crudApi.AddBook(book).subscribe((res: any) => {
      // console.log("data added successfully", res)
      this.ngZone.run(() => {
        this.router.navigateByUrl('/books-list')
      }, (err: any) => {
        console.log(err)
      })
    })
  }


  onSubmit(): any {
    this.crudApi.AddBook(this.bookForm.value).subscribe((res: any) => {
      // console.log("data added successfully", res)
      this.ngZone.run(() => {
        this.router.navigateByUrl('/books-list')
      }, (err: any) => {
        console.log(err)
      })
    })
  }

}
