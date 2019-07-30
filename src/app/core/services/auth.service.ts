import { Injectable } from '@angular/core'; //injeta a classe
import { map, catchError } from 'rxjs/operators'; // biblioteca do observable (requisição)
import { HttpClient, HttpHeaders } from '@angular/common/http'; // biblioteca para fazer requisição http
import {  Observable, throwError } from 'rxjs'; // biblioteca do observable (requisição)
import { environment } from './../../../environments/environment'; // endereço da api
import { Login } from '../models/login';

const API_URL = environment.API_URL + "api/token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postLogin(login: Login): Observable<any>{
    var data = "username=" + login.username + "&password=" + login.password + "&grant_type=" + login.grant_type;

    const httpOptions = {
		  headers : new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded'
		  })
    };
    
		return this.http.post<any>(API_URL, data, httpOptions).pipe(
			map((result: any) => {
				return result;
			}),
			catchError(err => {
				return throwError(err);
			})
		);
  }

  isAuthorized(): boolean{
    var _token = localStorage.getItem("accessToken");
    if(_token){
      return true;
    }
    return false;
  }
}
