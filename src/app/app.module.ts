import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { NavBarComponent } from './ComponentesReutilizables/nav-bar/nav-bar.component';
import { FormComponent } from './ComponentesReutilizables/formulario/form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Componentes/about/about.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { EmpleoComponent } from './Componentes/empleo/empleo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    NavBarComponent,
    FormComponent,
    NavBarComponent,
    AboutComponent,
    EducacionComponent,
    EmpleoComponent,
    InicioComponent
    
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
   NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
