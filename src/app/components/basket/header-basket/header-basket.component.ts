import { Component, OnInit } from '@angular/core';
import { IBasket } from '../../../_models/basket';
import { BasketService } from '../../../_services/basket.service';

@Component({
  selector: 'app-header-basket',
  templateUrl: './header-basket.component.html',
  styleUrls: ['../../../app.component.css', './header-basket.component.css'],
})
export class HeaderBasketComponent implements OnInit {
 public basket:IBasket;
  constructor(private basketService:BasketService) {}

  ngOnInit() {
    this.basketService.basketData.subscribe(
      data=>{
        this.basket = data;
      }
    );
  }

  removeItem(id:number):void{
    this.basketService.removeBasketItem(id);
  }
}
