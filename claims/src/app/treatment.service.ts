import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Treatment } from './treatment';
import { Claims } from './claims';
import { Display } from './display';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private userUrl:string;
  private hospitalId:number;
  private policyId:number;
  private patientId:number;
  display:Display;
  constructor(private http: HttpClient) { 
    this.userUrl="http://Claimsmanagementsystem-env.eba-fup8rg9v.us-east-2.elasticbeanstalk.com/treatments";
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
