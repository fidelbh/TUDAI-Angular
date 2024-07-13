import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpizzaPizzasComponent } from './opizza-pizzas/opizza-pizzas.component';
import { OpizzaAboutComponent } from './opizza-about/opizza-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizzas',
    pathMatch: 'full',
  },
  {
    path: 'pizzas',
    component: OpizzaPizzasComponent,
  },
  {
    path: 'about',
    component: OpizzaAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
