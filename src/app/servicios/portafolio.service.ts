import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from 'src/interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getProyecto(): Observable<any> {
    return this.http.get(`${this.apiURL}/ver/proyecto`);
  }

  getBootcamp(): Observable<any> {
    return this.http.get(`${this.apiURL}/ver/experiencia`);
  }

  getEducacion(): Observable<any> {
    return this.http.get(`${this.apiURL}/ver/educacion`);
  }

  getPerfil(): Observable<any> {
    return this.http.get(`${this.apiURL}/ver/usuario`);
  }

  getEmpleo(): Observable<any> {
    return this.http.get(`${this.apiURL}/ver/empleo`);
  }

  actualizarDescripcion(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiURL}/nueva/descripcion`, usuario);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }

}
