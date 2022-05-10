import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from "../../../_models/product";
import { BasketService } from '../../../_services/basket.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  constructor(private basketSevice:BasketService) {}

  ngOnInit():void {
  }

  AddToBasket():void{
    this.basketSevice.addBasketItem(this.product);
  } 
}
