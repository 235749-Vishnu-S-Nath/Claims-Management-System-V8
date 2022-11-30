import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserLogin } from './userLogin';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl:string;

  constructor(private http: HttpClient) { 
    this.userUrl="http://localhost:8080/users";
  }

  public findAll(): Observable<UserLogin[]>{
    return this.http.get<UserLogin[]>(this.userUrl);
 }
}
