import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Product, products} from '../products';
import { CartService } from '../cart.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : any;

  constructor(
    private route:ActivatedRoute,
    private cartService:CartService
    ) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToChart(product: Product) {
    this.cartService.addToChart(product);
    window.alert("Your product has been added to chart !")
  }

}