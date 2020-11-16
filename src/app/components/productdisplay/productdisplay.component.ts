import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {

  @Input() productsToDisplay;
  @Output() changeOut=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  changeIn(){
    this.changeOut.emit();
 
  }


}
