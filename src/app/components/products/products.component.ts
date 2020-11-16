import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductsService, private cartService: CartService, private route: ActivatedRoute){
    this.productService.getResource().subscribe(
      result => {
        this.products=result["hits"];
        this.originalProductList=this.products;
      },
      error => {
        alert("An unexpected error occured")
      }
    );

  }

  ngOnInit(): void {
    this.products=this.cartService.getProducts();
 
    this.count=this.cartService.getCartList().length;
  }

  title = 'Sowingo Front-end interview test - Muhammad Hassan';
  products=[];
  originalProductList=[];

  count:number = 0;
  filter:string="";

  onKeyUp(){
    if(this.filter.length > 0){
      this.products = [];
        this.originalProductList.forEach(product=> {
          if(product.subcategory.name.toLowerCase().indexOf(this.filter.trim().toLowerCase()) > -1 ||
            product.manufacturer.name.toLowerCase().indexOf(this.filter.trim().toLowerCase()) > -1 ||
            product.manufacturer_sku.toLowerCase().indexOf(this.filter.trim().toLowerCase()) > -1
            ){
                this.products.push(product);
          }
        })
    }
    else
      this.products=this.originalProductList;
  }

  changeIn(){
    this.count=this.cartService.getCartList().length;
  }

}
