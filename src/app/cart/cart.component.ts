import { Component, OnInit } from '@angular/core';
import { PizzaCartService } from '../pizza-cart.service';
import { Pizza } from '../pizza-list/Pizza';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartList$!: Observable<Pizza[]>;

  constructor(private cart: PizzaCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {}
}
