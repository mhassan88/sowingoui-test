import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products = [];
  title = 'Sowingo Front-end interview test - Muhammad Hassan';
  originalProductList=[];
  cartList=[];
  favoriteIdList=[];
  favoriteList=[];
  shoppingCart = [];
  count:number = 0;
  filter:string="";

  constructor(private cartService: CartService) {
    this.cartList = this.cartService.getCartList();
    this.count=this.cartList.length;
   }

  ngOnInit(): void {
    this.products = this.cartService.getCartList();
  }

  clear(){
    this.products = this.cartService.clearCart();
    this.count=this.cartService.getCartList().length;
  }
}
