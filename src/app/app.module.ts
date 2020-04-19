import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MyCartComponent } from './my-cart/my-cart.component';
import { routing } from './app.routing';
import {ShoppingDataService}  from './shopping-data.service'


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    FooterComponent,
    MyCartComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [ShoppingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
