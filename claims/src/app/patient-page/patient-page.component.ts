import { Component, OnInit } from '@angular/core';
import { Claims } from '../claims';
import { ClaimsService } from '../claims.service';
import { Display } from '../display';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';
import { Policy } from '../policy';
import { PolicyService } from '../policy.service';
import { TreatmentPageComponent } from '../treatment-page/treatment-page.component';
import { TreatmentService } from '../treatment.service';


@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {

  constructor(private patientService:PatientServiceService,
    private hospitalService:HospitalService,
    private policyService:PolicyService,
    private treatmentService:TreatmentService,
    private claimsService:ClaimsService){}

  patient: Patient;
  patientId:number;
  hospital: Hospital[];
  policies: Policy[];
  policy:Policy;
  claims:Claims=new Claims();
  display:Display;

  ngOnInit() {
    
    this.patientService.find(this.patientService.getPatientId()).subscribe(
      data=>{this.patient=data;}
    )

    this.hospitalService.findAll().subscribe(
      data => {this.hospital=data;}
    );

    this.policyService.findAll().subscribe(
      data => {this.policies=data;}
    );
  }

  change1(event,id){
    this.claims.hospitalId=event.target.id;
  }

  change2(event,id){
    this.claims.policyId=event.target.id;
    this.claimsService.setPolicyId(event.target.id);
  }
  rerout(){

    this.patientId=this.patientService.getPatientId();
    this.claims.patientId=this.patient.patientId;
    this.treatmentService.convert(this.claims);
  }
}

