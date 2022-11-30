import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { UserLogin } from '../userLogin';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService:UserService,
  private patientService:PatientServiceService,
  private route: ActivatedRoute, 
  private router: Router) { }

  users: UserLogin[];
  localUsername:string;
  localPassword:string;

  ngOnInit() {
    this.userService.findAll().subscribe(
      data => {this.users = data;}
    );
  }

  validate(){
    console.log(this.users);
    for(let u of this.users){
      console.log(u.username);
      if(this.localUsername == u.username){
        if(this.localPassword == u.password){
          this.patientService.initPatient(u.patientId);
          this.router.navigate(['/patient-page']);
        }
        else{
          console.log(this.localPassword);
          this.router.navigate(['/login-page']);
        }
      }
      else{
        console.log(this.localUsername);
      }
    }
  }
}
