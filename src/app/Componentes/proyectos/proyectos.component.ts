import { Component, OnInit } from '@angular/core';
//import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  /*loggedIn = false;

  constructor(private datosPortafolio:PortafolioService) { }
 proyecto: any;
  ngOnInit(): void {

    const loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn === 'true') {
    this.loggedIn = true;
  } else {
    this.loggedIn = false;
  }
  
   this.datosPortafolio.getProyecto().subscribe(data => {
  this.proyecto = data;
});
  
}*/
}
