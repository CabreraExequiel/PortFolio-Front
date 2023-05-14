import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  email: any;
  password: any;
  loggedIn = false;
  token: any;

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
  if (token) {
    this.loggedIn = true;
  } else {
    this.loggedIn = false;
  }
    
  }
  
  



  onSubmit() {
    const url = 'https://portfolio-backend-final-m0pk.onrender.com/login';
    const body = { email: this.email, password: this.password };
    this.http.post(url, body).subscribe(
      (response: any) => {
        this.loggedIn = true;
        this.router.navigate(['/inicio']);
        this.token = response.token;
        localStorage.setItem('token', this.token); 
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
  this.router.navigate(['/inicio']);
}

  
}