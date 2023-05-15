import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Componentes/about/about.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { EmpleoComponent } from './Componentes/empleo/empleo.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skill', component: SkillsComponent},
  { path: 'educacion', component: EducacionComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'empleos', component: EmpleoComponent},
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }