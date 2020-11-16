import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/error-handling/app-error';
import { BadRequest } from '../common/error-handling/bad-request';
import { NotFound } from '../common/error-handling/not-found-error';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http: HttpClient, private url: string) { }

  getResource(){
    return this.http.get(this.url);
  }

  postResource(resource){
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteResource(id){
    return this.http.delete(this.url)
    .pipe(
      catchError(this.handleError))
  }

  updateResource(resource){
    this.http.put(this.url + "/" + resource.id, JSON.stringify(resource))
    .pipe(
      catchError(this.handleError))
  }

  private handleError(error: Response){
    if(error.status == 404)
        return throwError(new NotFound());
    if(error.status == 400)
      return throwError(new BadRequest())
    return throwError(new AppError(error));       
  }
}

