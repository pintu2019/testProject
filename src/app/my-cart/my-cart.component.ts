import { Component, OnInit } from '@angular/core';
import { ShoppingDataService } from '../shopping-data.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  result;
  shoppingDataList: any;
  constructor(private shoppingData:ShoppingDataService) { 
  }
  ngOnInit() {
    this.shoppingData.getAllShopData("http://localhost:3000/cart").subscribe((res)=>{
       this.result = res;
       });
   }
}
