import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hospital } from './hospital';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private userUrl:string;
  constructor(private http: HttpClient) { 
    this.userUrl="http://Claimsmanagementsystem-env.eba-fup8rg9v.us-east-2.elasticbeanstalk.com/hospital";
  }

  public findAll(): Observable<Hospital[]>{
    return this.http.get<Hospital[]>(this.userUrl);
 }
}
