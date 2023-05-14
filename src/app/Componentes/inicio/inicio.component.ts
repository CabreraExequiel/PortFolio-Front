import { Component, OnInit } from '@angular/core';
//import { PortafolioService } from 'src/app/servicios/portafolio.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  /*constructor(private datosPortafolio:PortafolioService) { }
usuario: any

  ngOnInit(): void {
    this.datosPortafolio.getPerfil().subscribe(data =>{
      this.usuario = data;
    })
  
   
    
  }*/

}
