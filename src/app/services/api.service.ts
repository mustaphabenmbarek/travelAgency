import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  // postInscription (inscription: Form){
  //   this.http.post('https://travelagency-83a87-default-rtdb.europe-west1.firebasedatabase.app/ '); 
  // }
}
