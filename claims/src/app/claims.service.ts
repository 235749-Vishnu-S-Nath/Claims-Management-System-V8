import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claims } from './claims';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  private userUrl:string;

  constructor(private http: HttpClient) { 
    this.userUrl="http://localhost:8080/claims";
  }

  public save(claims:Claims) {
    console.log(claims.patientId);
    console.log(claims.hospitalId);
    console.log(claims.policyId);
    console.log(claims.treatmentId);
    console.log(claims.specialistId);
    console.log(claims.capableAmount);
    return this.http.post<Claims>(this.userUrl, claims);
  }
}
