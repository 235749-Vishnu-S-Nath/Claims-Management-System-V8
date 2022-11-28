import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Specialist } from './specialist';
import { TreatmentService } from './treatment.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  private userUrl:string;
  constructor(private http: HttpClient,private treatmentService:TreatmentService) { 
    this.userUrl="http://localhost:8080/specialists";
  }

  public findAllById(id:number): Observable<Specialist[]>{
    
    return this.http.get<Specialist[]>(this.userUrl+"/"+id);
 }
}
