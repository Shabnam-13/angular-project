import { IProduct } from './product';

export interface IBasket {
  id: number;
  totalPrice: number;
  totalCount: number;
  items: IBasketItem[];
}

export interface IBasketItem {
  count: number;
  product: IProduct;
}
