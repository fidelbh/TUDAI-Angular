import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from './pizza-list/Pizza';
import { Observable, tap } from 'rxjs';

const URL = 'https://6692ea1bfe34d30c923713f0.mockapi.io/api/pizzas';

@Injectable({
  providedIn: 'root',
})
export class PizzaDataService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(URL)
      .pipe(
        tap((pizzas: Pizza[]) =>
          pizzas.forEach((pizza) => (pizza.quantity = 0))
        )
      );
  }
}
