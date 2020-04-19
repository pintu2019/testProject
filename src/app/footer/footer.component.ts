import { Component, OnInit } from '@angular/core';
import { DataSubjectService } from '../data-subject.service';
import { ShoppingDataService } from '../shopping-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  result;
  Qty: number;
  totalAmt: number;
  cartQty = 0;
  totalAmu = 0;
  constructor(private datasubjectservice: DataSubjectService, private shoppingData: ShoppingDataService) { }

  ngOnInit() {
    this.shoppingData.getAllShopData("http://localhost:3000/cart").subscribe((res) => {
      this.result = res;
      this.result.forEach(element => {
        this.cartQty += parseInt(element.orderQuantity);
        this.datasubjectservice.getQuantity(this.cartQty);
      });
      this.result.forEach(element => {
        this.totalAmu += parseInt(element.price);
        this.datasubjectservice.getTotalAmouny(this.totalAmu);
      });
    });

    this.datasubjectservice.quantity.subscribe((res) => {
      this.Qty = res;
    })

    this.datasubjectservice.total.subscribe((res) => {
      this.totalAmt = res;
    })
  }

}
