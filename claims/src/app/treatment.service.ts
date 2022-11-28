import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Treatment } from './treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private userUrl:string;
  constructor(private http: HttpClient) { 
    this.userUrl="http://localhost:8080/treatments";
  }

  public findAll(): Observable<Treatment[]>{
    return this.http.get<Treatment[]>(this.userUrl);
 }
}
