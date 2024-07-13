import { Component, OnInit } from '@angular/core';
import { Pizza } from './Pizza';
import { PizzaCartService } from '../pizza-cart.service';
import { PizzaDataService } from '../pizza-data.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss',
})
export class PizzaListComponent implements OnInit {
  [x: string]: any;
  pizzas: Pizza[] = [];

  constructor(
    private cart: PizzaCartService,
    private pizzasService: PizzaDataService
  ) {}
  ngOnInit(): void {
    this.pizzasService.getAll().subscribe((pizzas) => (this.pizzas = pizzas));
  }

  upQuantity(pizza: Pizza): void {
    if (pizza.quantity < pizza.stock) pizza.quantity++;
  }

  downQuantity(pizza: Pizza): void {
    if (pizza.quantity > 0) pizza.quantity--;
  }

  onChangeQuantity(event: { target: any }, pizza: Pizza): void {
    console.log(event.target);
  }
  maxReached(m: string) {
    console.log(m);
  }

  addToCart(pizza: Pizza): void {
    this.cart.addToCart(pizza);
    pizza.stock -= pizza.quantity;
    pizza.quantity = 0;
  }
}
