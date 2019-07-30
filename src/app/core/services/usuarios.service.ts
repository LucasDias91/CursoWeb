import { Injectable } from '@angular/core'; //injeta a classe
import { map, catchError } from 'rxjs/operators'; // biblioteca do observable (requisição)
import { HttpClient } from '@angular/common/http'; // biblioteca para fazer requisição http
import {  Observable, throwError } from 'rxjs'; // biblioteca do observable (requisição)
import { environment } from './../../../environments/environment'; // endereço da api
import { Usuarios } from '../models/usuarios';

const API_URL = environment.API_URL + "/api/usuarios"

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  postUsuario(usuarioAdd: Usuarios): Observable<Usuarios[]>{
		return this.http.post<any>(API_URL, usuarioAdd)
		.pipe(
			map((result: any) => {
				return result;
			}),
			catchError(err => {
				return throwError(err);
			})
		);
  }
}
