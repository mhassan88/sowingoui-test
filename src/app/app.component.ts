import { BadRequest } from './common/error-handling/bad-request';
import { ProductsService } from './services/products.service';
import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Sowingo Front-end interview test - Muhammad Hassan';
   products=[];
   originalProductList=[];
  
  constructor(productService : ProductsService, private cartService:CartService){
    productService.getResource().subscribe(
      result => {
        this.products=result["hits"];
        this.originalProductList=this.products;
        this.cartService.addProducts(this.originalProductList);
      },
      error => {
        alert("An unexpected error occured")
      }
    );
  }
}
