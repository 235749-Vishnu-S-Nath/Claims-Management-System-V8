import { Component, OnInit } from '@angular/core';
import { Claims } from '../claims';
import { ClaimsService } from '../claims.service';
import { Display } from '../display';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  constructor(private claimsService:ClaimsService,
    private treatmentService:TreatmentService) { }
  claims:Claims[];
  name:string;
  policy:string;
  pAmount:number;
  treatment:string;

  ngOnInit() {
    // this.claimsService.findAll().subscribe(
    //   data => {this.claims = data;}
    // );
  }
  submit(){
    // this.name=this.claimsService.getDisplay().patientName;
    // this.policy=this.claimsService.getDisplay().policyName;
    // this.pAmount=this.claimsService.getDisplay().preAmount;

    // console.log(this.name+" "+this.policy);
  }
}
