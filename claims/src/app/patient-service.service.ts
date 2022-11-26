import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private userUrl:string;

  constructor(private http: HttpClient) {
    this.userUrl="http://localhost:8080/patients";
   }

   public findAll(): Observable<Patient[]>{
      return this.http.get<Patient[]>(this.userUrl);
   }
}
