import { Component, OnInit } from '@angular/core';
import { Claims } from '../claims';
import { ClaimsService } from '../claims.service';
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
    private treatmentService:TreatmentService){}

  patient: Patient;
  hospital: Hospital[];
  policies: Policy[];
  claims:Claims=new Claims();

  ngOnInit() {

    this.patientService.find(1).subscribe(
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
  }
  rerout(){
    this.claims.patientId=this.patient.patientId;
    console.log(this.claims.patientId);
    this.treatmentService.convert(this.claims);
  }
}

