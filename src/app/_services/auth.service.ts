import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API='http://localhost:8090/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user): Observable<any>{
    return this.http.post(AUTH_API+'signup',{
    name : user.username,
	  email: user.email,
	  password: user.password,
    },httpOptions);
  }

  login(creds): Observable<any>{
    return this.http.post(AUTH_API+'signin',{
    username : creds.username,
	  password: creds.password
    },httpOptions);
  }
}
