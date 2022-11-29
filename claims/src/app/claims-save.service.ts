import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claims } from './claims';
import { ClaimsSave } from './claims-save';

@Injectable({
  providedIn: 'root'
})
export class ClaimsSaveService {
  private userUrl:string;
  private claimsSave:ClaimsSave = new ClaimsSave();
  constructor(private http: HttpClient) { 
    this.userUrl="http://localhost:8080/claims";
  }

  public save(claims:Claims) {
    this.claimsSave.patient.patientId=claims.patientId;
    this.claimsSave.capableAmount=0;
    this.claimsSave.hospital.hospitalId=claims.hospitalId;
    this.claimsSave.policy.policyId=claims.policyId;
    this.claimsSave.specialist.specialistId=claims.specialistId;
    this.claimsSave.treatment.treatmentId=claims.treatmentId;
    return this.http.post<ClaimsSave>(this.userUrl, this.claimsSave);
  }
}