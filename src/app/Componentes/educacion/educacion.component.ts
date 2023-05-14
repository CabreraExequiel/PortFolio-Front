import { Component, OnInit } from '@angular/core';
import axios from 'axios';
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
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.datosPortafolio.getEducacion().subscribe(data => {
      this.educacion = data;
  })
    this.datosPortafolio.getBootcamp().subscribe(data => {
      this.bootcamp = data;
    })

    
  
}
onClickEditar() {
  const nuevaDescripcion = prompt('Ingrese la nueva descripción:');
  const nuevoNombreCurso = prompt('Ingrese el nuevo nombre del curso:');
  const nuevoTitulo = prompt('Ingrese el nuevo título:');
  const nuevaUrlImg = prompt('Ingrese la nueva URL de la imagen:');
  if (nuevaDescripcion && nuevoNombreCurso && nuevoTitulo && nuevaUrlImg) {
    axios.post('/actualizar/educacion', {
      id: this.educacion[0].id,
      descripcion: nuevaDescripcion,
      nombre_curso: nuevoNombreCurso,
      titulo: nuevoTitulo,
      url_img: nuevaUrlImg
    })
    .then(response => {
      console.log(response.data);
      // Actualizar los campos en la variable del componente
      this.educacion[0].descripcion = nuevaDescripcion;
      this.educacion[0].nombre_curso = nuevoNombreCurso;
      this.educacion[0].titulo = nuevoTitulo;
      this.educacion[0].url_img = nuevaUrlImg;
    })
    .catch(error => {
      console.log(error);
    });
  }
}

}