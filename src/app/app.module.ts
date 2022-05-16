import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookListComponent } from './book-list/book-list.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { BasketCountComponent } from './components/basket/basket-count/basket-count.component';
import { HeaderBasketComponent } from './components/basket/header-basket/header-basket.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { BasketComponent } from './pages/basket/basket.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NotifierModule,
    HttpClientModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    BookListComponent,
    ProductItemComponent,
    BasketCountComponent,
    HeaderBasketComponent,
    PostListComponent,
    PostDetailsComponent,
    BasketComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
