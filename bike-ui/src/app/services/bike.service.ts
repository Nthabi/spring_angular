import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const HttpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  //Get all the bikes from the DB
  getBikes(){
    return this.http.get('http://localhost:8080/api/v1/bikes');
  }

  //get one bike
  getBike(id : number){
    return this.http.get('http://localhost:8080/api/v1/bikes/' + id);
  }

  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    return this.http.post('http://localhost:8080/api/v1/bikes',  body, HttpOptions);
  }
}
