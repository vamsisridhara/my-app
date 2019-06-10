import { Component, OnInit } from '@angular/core';
import { Products } from '../../viewmodels/products';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products;
  constructor() {
    this.products = new Products();
    this.products.productID = 10;
    this.products.productName = 'test';
    this.products.description = 'description';
  }

  ngOnInit() {
  }

}
