import { Injectable } from '@angular/core';
import { Pizza } from './pizza-list/Pizza';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaCartService {
  constructor() {}

  private _cartList: Pizza[] = [];
  cartList: BehaviorSubject<Pizza[]> = new BehaviorSubject(this._cartList);

  addToCart(pizza: Pizza) {
    let item = this._cartList.find((v1) => v1.name == pizza.name);
    if (!item) this._cartList.push({ ...pizza });
    else item.quantity += pizza.quantity;
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
