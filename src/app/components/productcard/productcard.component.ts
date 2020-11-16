import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit{

  @Input() product;
   @Output() changeOut = new EventEmitter();

  isInCart:boolean = false;
  isFavorite:boolean =false;
  buttonText:string = "Add to Cart";

  
  constructor(private cartService: CartService, private favoriteService:FavoriteService) {

    
  }

  ngOnInit(): void {
   
    if(this.cartService.getCartIdList().includes(this.product.objectID)){
      this.isInCart=true;
      this.buttonText="Added to Cart";
    }
    else{
      this.isInCart=false;
      this.buttonText="Add to Cart";
    }

    if(this.cartService.getFavoriteIdList().includes(this.product.objectID)){
      this.isFavorite=true;
    }
    else{
      this.isFavorite=false;
    }
    
  }



  onAddToCart(){
    
    if(!this.cartService.getCartIdList().includes(this.product)){
      this.cartService.addToCartList(this.product);
    }
    if(this.cartService.getCartList().includes(this.product)){
      this.isInCart=true;
      this.buttonText="Added to Cart"
    }
    else{
     this.isInCart=false;
    }
    this.changeOut.emit();
  
  }

  onFavoriteIconClicked(arg:boolean){
    
  if(this.isFavorite==true){
    this.favoriteService.deleteResource(this.product.objectID)
    .subscribe(res =>{
      if(!res["favorite"]){
        this.cartService.removeFromFavoriteList(this.product);
        this.isFavorite=false;
      }
    })
  }
  else{
    this.favoriteService.postResource({id: this.product.objectID})
    .subscribe(res => {
      if(res["favorite"]){
        this.cartService.addToFavoriteList(this.product);
        this.isFavorite=true;
      }
    })
  }
  }

}