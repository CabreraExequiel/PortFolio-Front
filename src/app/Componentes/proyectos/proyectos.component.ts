import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
    loggedIn: boolean = false;

  constructor(private datosPortafolio:PortafolioService) { 
   
  }
 proyecto: any;
  ngOnInit(): void {

    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn = true;
    }
  
   this.datosPortafolio.getProyecto().subscribe(data => {
  this.proyecto = data;
});
  
}

login() {
  // realizar la lógica de inicio de sesión aquí
  this.loggedIn = true;
  localStorage.setItem('loggedIn', 'true');
}

logout() {
  // realizar la lógica de cierre de sesión aquí
  this.loggedIn = false;
  localStorage.setItem('loggedIn', 'false');
}
}
