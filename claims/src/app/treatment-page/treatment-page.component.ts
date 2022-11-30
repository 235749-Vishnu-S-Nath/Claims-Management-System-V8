import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Claims } from '../claims';
import { ClaimsSave } from '../claims-save';
import { ClaimsSaveService } from '../claims-save.service';
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
    private claimsSaveService:ClaimsSaveService,
    private route: ActivatedRoute, 
    private router: Router) { 
  }
  
  treatments:Treatment[];
  specialists:Specialist[];
  treatmentId:number;
  specialistId1:number;
  hospitalId:number;
  policyId:number;

  claims:Claims=new Claims();
  claimsSave:ClaimsSave=new ClaimsSave();
  ngOnInit() {
    this.treatmentService.findAll().subscribe(
      data => {this.treatments=data;}
    );
  }
  change1(event, id) {
    this.treatmentId=event.target.id;
    this.specialistService.findAllById(event.target.id).subscribe(
      data => {this.specialists=data;}
    );
  }
  change2(event, id){
    this.specialistId1=event.target.id;
  }

  gotoUserList() {
    this.router.navigate(['/claims']);
  }
   
  save(){
    this.claims.capableAmount=0;
    this.claims.claimsId=0;
    this.claims.specialistId=this.specialistId1;
    this.claims.treatmentId=this.treatmentId;
   this.claimsService.save(
    Object.assign(
      {},this.claims,{
        patient:{
          patientId:this.treatmentService.getPatientId()
        },
        policy:{
          policyId:this.treatmentService.getPolicyId()
        },
        hospital:{
          hospitalId:this.treatmentService.getHospitalId()
        }
      }
    )
   ).subscribe(result => this.gotoUserList());
  }
}
