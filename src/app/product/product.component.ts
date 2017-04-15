import { Component, OnInit } from '@angular/core';
import { IProduct } from 'app/product/product.module';
import { ProductService } from 'app/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductList: IProduct[];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    return this.productService.GetProducts().subscribe(product => {
      // tslint:disable-next-line:no-trailing-whitespace
      this.ProductList = product;
    });
  }

// tslint:disable-next-line:eofline
}