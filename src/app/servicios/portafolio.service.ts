import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})



export class PortafolioService {
  
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getProyecto() {
    const url1 = `${this.apiURL}/ver/proyecto`;
    return this.http.get(url1);
    
  }
  getBootcamp() {
    const url2 = `${this.apiURL}/ver/experiencia`;
    return this.http.get(url2);
    
  }
  getEducacion() {
    const url3 = `${this.apiURL}/ver/educacion`;
    return this.http.get(url3);
    
  }
  getPerfil() {
    const url4 = `${this.apiURL}/ver/usuario`;
    return this.http.get(url4);
    
  }
  getEmpleo() {
    const url5 = `${this.apiURL}/ver/empleo`;
    return this.http.get(url5);
    
  }

 
  
  
  
  
  


  

}
