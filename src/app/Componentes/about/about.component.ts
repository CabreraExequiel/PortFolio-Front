import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import axios from 'axios';
//import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
 /* @ViewChild('descripcion') descripcion: any;

  usuario: any;
  descripcionUsuario: any;

  constructor(private datosPortafolio: PortafolioService, private httpClient: HttpClient) { }
  loggedIn = false; 
  ngOnInit(): void {
    this.datosPortafolio.getPerfil().subscribe(data =>{
      this.usuario = data;
    })
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    
  }
  

  onClickEditar() {
    const nuevoTexto = prompt('Ingrese el nuevo texto:');
    if (nuevoTexto) {
      this.descripcion.nativeElement.textContent = nuevoTexto;
      const usuarioActualizado = {
        id: this.usuario[0].id,
        descripcion: nuevoTexto
      };
    
     
     
    }
  }
  */
  
}