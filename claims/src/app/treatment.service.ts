import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Treatment } from './treatment';
import { Claims } from './claims';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private userUrl:string;
  private claimsUrl:string;
  private hospitalId:number;
  private policyId:number;
  private patientId:number;
  constructor(private http: HttpClient) { 
    this.userUrl="http://localhost:8080/treatments";
    this.claimsUrl="http://localhost:8080/claims"
  }

  public findAll(): Observable<Treatment[]>{
    return this.http.get<Treatment[]>(this.userUrl);
 }

 public getHospitalId(){
  return this.hospitalId;
 }

 public getPolicyId(){
  return this.policyId;
 }

 public getPatientId(){
  return this.patientId;
 }

 public convert(claims:Claims){
  this.hospitalId=claims.hospitalId;
  this.policyId=claims.policyId;
  this.patientId=claims.patientId;
 }
}
