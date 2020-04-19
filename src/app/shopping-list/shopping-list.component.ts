import { Component, OnInit } from '@angular/core';
import { ShoppingDataService } from '../shopping-data.service';
import { DataSubjectService } from '../data-subject.service'
declare var $: any

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  result;
  cartCount: any;
  cartQty = 0;
  totalAmt = 0;
  constructor(private shoppingDataList: ShoppingDataService, private datasubjectservice: DataSubjectService) { }
  ngOnInit() {
    this.shoppingDataList.getAllShopData("http://localhost:3000/productList").subscribe((res) => {
      this.result = res;
    });
  }

  quantityDecrease(index) {
    if (this.result[index].orderQuantity == 0) {
      this.result[index].orderQuantity = 0;
    }
    else {
      this.result[index].orderQuantity--;
    }
  }
  addToCart(item) {
    this.shoppingDataList.myCart(item, "http://localhost:3000/cart").subscribe(() => {
      this.shoppingDataList.getAllShopData("http://localhost:3000/cart").subscribe((res) => {
        this.cartCount = res;
        this.cartCount.forEach(element => {
          this.cartQty += parseInt(element.orderQuantity);
          this.datasubjectservice.getQuantity(this.cartQty);
        });
        this.cartCount.forEach(element => {
          this.totalAmt += parseInt(element.price);
          this.datasubjectservice.getTotalAmouny(this.totalAmt);
        });
      })

      $('#sucmodal').modal('show');
    }, () => {
      $('#errmodal').modal('show');
    })
  }
  udatedPlus(data) {
    let q = data.orderQuantity++;
    this.shoppingDataList.updateCart("http://localhost:3000/cart", q).subscribe(() => {
    }, (err) => {
    })
  }
  udatedMinu() {

  }
}
