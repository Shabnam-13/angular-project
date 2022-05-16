import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../_models/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  public products: IProduct[] = [];

  constructor() {
    this.products.push({
      id: 1,
      name: 'Samsung Galaxy A32 64GB (SM-A325) Blue',
      image:
        'https://irshad.az/resized/fit540x550/center/products/44102/a64f79096acd3e7bec2003243d72334e.jpg',
      price: 549.99,
    });
    this.products.push({
      id: 2,
      name: 'Honor 50 128 GB Emerald Green',
      image:
        'https://irshad.az/resized/fit540x550/center/products/63509/honor50-green.jpg',
      price: 1199.99,
    });
    this.products.push({
      id: 3,
      name: 'Honor 50 Lite 128GB Midnight Black',
      image:
        'https://irshad.az/resized/fit540x550/center/products/69042/50lite-black.jpg',
      price: 699.99,
    });
    this.products.push({
      id: 4,
      name: 'iPhone 13 Pro Max 256GB Sierra Blue',
      image:
        'https://irshad.az/resized/fit540x550/center/products/64251/13pro-sblue.jpeg',
      price: 3499.99,
    });
  }

  ngOnInit() {}
}
