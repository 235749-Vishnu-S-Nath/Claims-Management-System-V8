import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';
import { Policy } from '../policy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {

  constructor(private patientService:PatientServiceService,private hospitalService:HospitalService,private policyService:PolicyService){
  }
  patient: Patient;
  hospital: Hospital[];
  policies: Policy[];
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
}

