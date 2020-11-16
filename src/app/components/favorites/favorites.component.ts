import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  products = [];
  title = 'Sowingo Front-end interview test - Muhammad Hassan';
  originalProductList=[];

  count:number = 0;
  filter:string="";

  constructor(private cartService: CartService) {
    this.products = this.cartService.getFavoriteList();
    
  }

  ngOnInit(): void {
    this.products = this.cartService.getFavoriteList();
    this.count=this.cartService.getCartList().length;
  }

  changeIn(){
    this.count=this.cartService.getCartList().length;
    
  }

}
