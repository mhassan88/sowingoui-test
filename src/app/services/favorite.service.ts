import { ApidataService } from './apidata.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService extends ApidataService {

  constructor(http: HttpClient) {
    super(http, 'https://demo5514996.mockable.io/favorites');
   }
}
