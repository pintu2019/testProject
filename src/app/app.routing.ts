
import { RouterModule, Routes } from '@angular/router';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const routes: Routes = [
  {path:'',redirectTo:"shoppingList",pathMatch:'full'},
  {path:'shoppingList',component:ShoppingListComponent},
  { path: 'mycart', component: MyCartComponent }
];
export const routing = RouterModule.forRoot(routes);