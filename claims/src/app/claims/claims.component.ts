import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claims } from '../claims';
import { ClaimsService } from '../claims.service';
import { Display } from '../display';
import { Policy } from '../policy';
import { PolicyService } from '../policy.service';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  constructor(private claimsService:ClaimsService,
  private policyService:PolicyService,
  private router: Router) { }
  
  policy:Policy[];
  claims:Claims[];
  updateClaims:Claims;
  policyId:number;
  amount:number;

  ngOnInit() {
    this.policyService.findAll().subscribe(
      data => {this.policyId=data[this.claimsService.getPolicyId()-1].policyPremiumAmount;},
    );
    this.claimsService.findAll().subscribe(
      data => {this.claims=data;}
    );
  }
  inputText(event,amount){
    this.amount=event.target.amount;
  }

  gotoUserList() {
    this.router.navigate(['/claims']);
  }
  
  submit(amount){
    this.updateClaims=this.claims[this.claimsService.getPolicyId()-1];
    this.updateClaims.capableAmount=amount;
    this.claimsService.update(this.updateClaims);

    this.router.navigate(["/success"])
  }
}
