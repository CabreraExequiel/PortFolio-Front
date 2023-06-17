import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    constructor(private datosPortafolio:PortafolioService) { }

  educacion: any;
  bootcamp: any;
  loggedIn = false; 

  

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  if (token) {
    this.loggedIn = true;
  }

    this.datosPortafolio.getEducacion().subscribe(data => {
      this.educacion = data;
  })
    this.datosPortafolio.getBootcamp().subscribe(data => {
      this.bootcamp = data;
    })

    
  
}
onClickEditar() {
 
}

}