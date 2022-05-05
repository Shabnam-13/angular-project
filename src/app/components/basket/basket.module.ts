import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBasketComponent } from './header-basket/header-basket.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BasketCountComponent } from './basket-count/basket-count.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [HeaderBasketComponent, BasketCountComponent],
})
export class BasketModule {}
