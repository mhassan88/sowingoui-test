import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  originalProductList = [];
  cartList = [];
  cartIdList = [];
  favoriteList = [];
  favoriteIdList = [];

  constructor() { }

  addToCartList(product){
    this.cartList.push(product);
    this.cartIdList.push(product.objectID);
  }

  getCartList(){
    return this.cartList;
  }
  getCartIdList(){
    return this.cartIdList;
  }
  
  removeFromCartList(objID){
    this.cartList.splice(this.cartList.findIndex(id=>id.objectID == objID), 1);
    this.cartIdList.splice(this.cartIdList.findIndex(id=>id == objID), 1);
  }

  clearCart(){
    this.cartList = [];
    this.cartIdList = [];
    return this.cartList;
  }
  addToFavoriteList(product){
    this.favoriteList.push(product);
    this.favoriteIdList.push(product.objectID)
  }
  removeFromFavoriteList(product){
    this.favoriteList.splice(this.favoriteList.findIndex(id=>id==product),1);
    this.favoriteIdList.splice(this.favoriteIdList.findIndex(id=> id==product.objectID),1)
  }
  getFavoriteList(){
    return this.favoriteList;
  }

  getFavoriteIdList(){
    return this.favoriteIdList;
  }

  clearFavorites(){
    this.favoriteList=[];
    return this.favoriteList;
  }

  getProducts(){
    return this.originalProductList;
  }
  addProducts(products){
    this.originalProductList=products;
  }
}
