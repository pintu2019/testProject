import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShoppingDataService {

  constructor(private httpclient:HttpClient) { }
  getAllShopData(url){
      return this.httpclient.get(url);
  }
  myCart(cartData,url){
     return this.httpclient.post(url,cartData);
  }
  updateCart(url,plusData){
    return this.httpclient.patch(url,plusData);
 }
}
