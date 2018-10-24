import { Component, OnInit } from '@angular/core';

import { ProductService } from './shared/product.service';
import { Product } from './shared/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'productImage', 'imageUrl', 'mrp', 'price'];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.productService.getProductList().subscribe((res) => {
      this.productService.products = res as Product[];
      console.log(this.productService.products);
    });
  }

}
