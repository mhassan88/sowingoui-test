import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  imgUrl:string;
  imgUrlEmpty:string="heart.png";
  imgUrlFilled:string="heartfilled.png";
  @Input() isFavorite: boolean;
  @Output() onFavoriteIconClicked = new EventEmitter();
  
  constructor(private cartService:CartService) { 
  
  }

  ngOnInit(): void {

  
    if(this.isFavorite){
      this.imgUrl=this.imgUrlFilled;
    }
    else{
      this.imgUrl=this.imgUrlEmpty;
    }
  }
  ngOnChanges(){
    if(this.isFavorite){
      this.imgUrl=this.imgUrlFilled;
    }
    else{
      this.imgUrl=this.imgUrlEmpty;
    }
  }
  onClick(){

    this.onFavoriteIconClicked.emit(this.isFavorite);
  }

}
