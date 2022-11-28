import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private userUrl:string;
  constructor(private http: HttpClient) { 
    this.userUrl="http://localhost:8080/policies";
  }

  public findAll(): Observable<Policy[]>{
    return this.http.get<Policy[]>(this.userUrl);
 }
}
