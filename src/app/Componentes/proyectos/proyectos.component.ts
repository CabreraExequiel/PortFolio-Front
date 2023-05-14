import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
    loggedIn = false;

  constructor(private datosPortafolio:PortafolioService) { }
 proyecto: any;
  ngOnInit(): void {

   
  
   this.datosPortafolio.getProyecto().subscribe(data => {
  this.proyecto = data;
});
  
}
}
