import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSubjectService {

  constructor() { }
  public quantity = new BehaviorSubject<number>(0);
  public total = new BehaviorSubject<number>(0);
  getQuantity(res){
    return this.quantity.next(res)
  }
  getTotalAmouny(res){
    return this.total.next(res)
  }
}
