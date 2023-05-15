import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PortafolioService } from 'src/app/servicios/portafolio.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  email: any;
  password: any;
  loggedIn = false;
  

  constructor(private http: HttpClient, private router: Router, private portafolioService: PortafolioService) {
    // verificar si hay un token en localStorage
  const token = localStorage.getItem('token');
  if (token) {
    this.loggedIn = true;
  }
  }

  ngOnInit(): void {
   
    
  }
  
  

onSubmit() {
  const credentials = { email: this.email, password: this.password };
  this.portafolioService.login(credentials).subscribe(
    (response: any) => {
      this.loggedIn = true;
      localStorage.setItem('token', response.token); // guardar token en localStorage
      this.router.navigate(['/inicio']);
    },
    (error) => {
      alert('Rechazado');
      this.router.navigate(['/inicio']);
    }
  );
}

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  

  
}