import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { ProductdisplayComponent } from './components/productdisplay/productdisplay.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductcardComponent,
    ProductdisplayComponent,
    FavoriteComponent,
    ShoppingCartComponent,
    ProductsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
