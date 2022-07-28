import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'add-book', pathMatch: 'full'
  },
  {
    path:'books-list', component:BooksListComponent
  },
  {
    path:'edit-book/:id', component:BookDetailsComponent
  },
  {
    path:'add-book', component:AddBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
