import { IProduct } from './product';

export interface IBasket {
  totalPrice: number;
  totalCount: number;
  items: IBasketItem[];
}

export interface IBasketItem {
  count: number;
  product: IProduct;
}
