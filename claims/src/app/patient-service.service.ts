import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private userUrl:string;
  private patientByIdUrl:string;
  private patientId:number;

  constructor(private http: HttpClient) {
    this.userUrl="http://localhost:8080/patients";
    this.patientByIdUrl="http://localhost:8080/patient/";
   }
   
   public findAll(): Observable<Patient[]>{
      return this.http.get<Patient[]>(this.userUrl);
   }

   public find(id:number):Observable<Patient>{
    return this.http.get<Patient>(this.patientByIdUrl+id);
   }

   public getPatientId(){
    return this.patientId;
   }

   public initPatient(id){
    this.patientId=id;
   }
}
