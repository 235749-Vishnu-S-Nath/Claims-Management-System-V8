import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claims } from './claims';
import { Observable } from 'rxjs';
import { Display } from './display';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {


  private userUrl:string;
  // id:number;
  // claims:Claims;
  // display:Display;

  constructor(private http: HttpClient) { 
    this.userUrl="http://localhost:8080/claims";
  }

  public save(claims:Claims) {
    return this.http.post<Claims>(this.userUrl, claims);
  }

//   public findAll(): Observable<Claims[]>{
//     return this.http.get<Claims[]>(this.userUrl);
//  }

//   public getDisplay(){
//     return this.display;
//   }

//  public setDisplay(display:Display){
//   this.display.patientName=display.patientName;
//   this.display.policyName=display.policyName;
//   this.display.preAmount=display.preAmount;
//  }

}
