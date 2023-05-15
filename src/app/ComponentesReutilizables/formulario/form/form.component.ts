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
  loginForm: FormGroup; // instancia de FormGroup
  loggedIn = false; // variable para controlar el estado de inicio de sesión

  constructor(private http: HttpClient, private router: Router, private portafolioService: PortafolioService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({ // agregue FormControl para cada campo de entrada
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    // verificar si hay un token en localStorage
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn = true;
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    const credentials = { email: this.loginForm.value.email, password: this.loginForm.value.password };
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
