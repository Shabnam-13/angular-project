import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import {
//   FontAwesomeModule,
//   FaIconLibrary,
// } from '@fortawesome/angular-fontawesome';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NotifierModule],
  // imports: [BrowserModule, FormsModule, FontAwesomeModule],
  declarations: [AppComponent, HelloComponent, BookListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(library: FaIconLibrary) {
  //   // Add an icon to the library for convenient access in other components
  // }
}
