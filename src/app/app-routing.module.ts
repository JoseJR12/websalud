import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path:'', component: InicioComponent},
  { path:'mision-vision', component: MisionVisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
