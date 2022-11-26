import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {

  constructor(private patientService:PatientServiceService){
  }
  patient: Patient[];
  ngOnInit() {
    console.log("hi");
    this.patientService.findAll().subscribe(
      data => {this.patient=data;}
    );
  }
}
