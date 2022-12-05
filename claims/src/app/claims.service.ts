import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claims } from './claims';
import { Observable } from 'rxjs';
import { Display } from './display';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {


  private userUrl:string;
  private updateUrl:string;
  policyId:number;
  postId;

  constructor(private http: HttpClient) { 
    this.userUrl="http://Claimsmanagementsystem-env.eba-fup8rg9v.us-east-2.elasticbeanstalk.com/claims";
    this.updateUrl="http://Claimsmanagementsystem-env.eba-fup8rg9v.us-east-2.elasticbeanstalk.com/claim";
  }

  public findAll(): Observable<Claims[]>{
    return this.http.get<Claims[]>(this.userUrl);
 }

  public save(claims:Claims) {
    return this.http.post<Claims>(this.userUrl, claims);
  }

  public update(body:Claims){
    return this.http.put<Claims>(this.updateUrl, body).subscribe(data => this.postId = data.claimsId);

  }

  public getPolicyId(){
    return this.policyId;
  }

  public setPolicyId(id:number){
    this.policyId=id;
  }
}
