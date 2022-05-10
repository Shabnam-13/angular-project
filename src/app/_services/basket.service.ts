import { Injectable } from '@angular/core';
import { IBasket } from '../_models/basket';
import { IProduct } from '../_models/product';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor() {}
  public basket: IBasket;
  addBasketItem(product: IProduct): void {
    const findedIndex = this.basket.items.findIndex(
      (i) => i.product === product
    );
    if (findedIndex === -1) {
      this.basket.items.push({
        count: 1,
        product: product,
      });
      this.basket.totalCount++;
    } else {
      this.basket.items[findedIndex].count++;
      this.basket.totalPrice += product.price;
    }
  }

  removeBasketItem(prodcutId: number):void {
    const findedIndex = this.basket.items.findIndex(
      (i) => i.product.id === prodcutId
    );
    if (findedIndex !== -1){
      const deletedItem = this.basket.items.splice(findedIndex,1);
      this.basket.totalCount -= deletedItem[0].count;
      this.basket.totalPrice -= deletedItem[0].count * deletedItem[0].product.price;
    } 
  }

  updateCount(prodcutId: number, count: number) {
    const findedIndex = this.basket.items.findIndex(
      (i) => i.product.id === prodcutId
    );
    if (findedIndex !== -1) {
      const currentCount = this.basket.items[findedIndex].count;
      this.basket.items[findedIndex].count = count;

      if (currentCount > count) {
        this.basket.totalCount -= currentCount - count;
        this.basket.totalPrice -=
          (currentCount - count) * this.basket.items[findedIndex].product.price;
      } else {
        this.basket.totalCount += currentCount - count;
        this.basket.totalPrice +=
          (currentCount - count) * this.basket.items[findedIndex].product.price;
      }
    }
  }
}
