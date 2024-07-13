import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { FormsModule } from '@angular/forms';
import { OpizzaAboutComponent } from './opizza-about/opizza-about.component';
import { CartComponent } from './cart/cart.component';
import { OpizzaPizzasComponent } from './opizza-pizzas/opizza-pizzas.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    OpizzaAboutComponent,
    CartComponent,
    OpizzaPizzasComponent,
    InputIntegerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
