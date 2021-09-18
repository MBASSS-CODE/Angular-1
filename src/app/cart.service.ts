import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';


@Injectable({
  providedIn : 'root'
})
export class CartService {

  getShippingPrice(){
    return this.http.get<{
      type  :string,
      price :number
    }[]>('/assets/shipping.json');
  }

  items: Product []= [];
  
  addToChart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearChart() {
    this.items = [];
    return this.items;
  }



  constructor(
    private http:HttpClient
  ) { }

}