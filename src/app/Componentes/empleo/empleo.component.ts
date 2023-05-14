import { Component, OnInit } from '@angular/core';
import axios from 'axios';
//import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    /*
empleo: any
loggedIn = false; 
  constructor(private datosPortafolio: PortafolioService) { }


  ngOnInit(): void {
    
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.datosPortafolio.getEmpleo().subscribe(data => {
      this.empleo = data;
  })
  
}
onClickEditar() {
  const nuevaUrlImg = prompt('Ingrese la nueva url de la imagen:');
  const nuevaEmpresa = prompt('Ingrese el nuevo nombre de la empresa:');
  const nuevoPuesto = prompt('Ingrese el nuevo puesto:');
  const nuevaUbicacion = prompt('Ingrese la nueva ubicación:');
  const nuevoContacto = prompt('Ingrese el nuevo contacto:');

  if (nuevaUrlImg || nuevaEmpresa || nuevoPuesto || nuevaUbicacion || nuevoContacto) {
    axios.post('/editar/empleo', {
      url_img: nuevaUrlImg,
      empresa: nuevaEmpresa,
      puesto: nuevoPuesto,
      ubicacion: nuevaUbicacion,
      contacto: nuevoContacto
    })
    .then(response => {
      console.log(response.data);
      // Actualizar los campos en la variable del componente
      this.empleo[0].url_img = nuevaUrlImg || this.empleo[0].url_img;
      this.empleo[0].empresa = nuevaEmpresa || this.empleo[0].empresa;
      this.empleo[0].puesto = nuevoPuesto || this.empleo[0].puesto;
      this.empleo[0].ubicacion = nuevaUbicacion || this.empleo[0].ubicacion;
      this.empleo[0].contacto = nuevoContacto || this.empleo[0].contacto;
    })
    .catch(error => {
      console.log(error);
    });
  }
}
*/

}