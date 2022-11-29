import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Claims } from '../claims';
import { ClaimsService } from '../claims.service';
import { Specialist } from '../specialist';
import { SpecialistService } from '../specialist.service';
import { Treatment } from '../treatment';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'app-treatment-page',
  templateUrl: './treatment-page.component.html',
  styleUrls: ['./treatment-page.component.css']
})
export class TreatmentPageComponent implements OnInit {

  constructor(private treatmentService:TreatmentService,
    private specialistService:SpecialistService,
    private claimsService:ClaimsService,
    private route: ActivatedRoute, 
    private router: Router) { 
  }
  
  treatments:Treatment[];
  specialists:Specialist[];
  treatmentId:number;
  specialistId:number;
  hospitalId:number;
  policyId:number;

  claims:Claims=new Claims();
  ngOnInit() {
    this.treatmentService.findAll().subscribe(
      data => {this.treatments=data;}
    );
  }
  change1(event, id) {
    this.treatmentId=event.target.id;
    this.claims.treatmentId=event.target.id;
    this.specialistService.findAllById(event.target.id).subscribe(
      data => {this.specialists=data;}
    );
  }
  change2(event, id){
    this.specialistId=event.target.id;
    this.claims.specialistId=event.target.id;
  }

  gotoUserList() {
    this.router.navigate(['/login-page']);
  }
   
  save(){
    this.claims.hospitalId=this.treatmentService.getHospitalId();
    this.claims.policyId=this.treatmentService.getPolicyId();
    this.claims.capableAmount=0;
    this.claims.patientId=this.treatmentService.getPatientId();
    
    this.claimsService.save(this.claims).subscribe(result => this.gotoUserList());
  }
}
