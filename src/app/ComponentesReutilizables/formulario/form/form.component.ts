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
 
    
  }
  
  



  onSubmit() {
    
  }

  logout() {
  
}

  
}