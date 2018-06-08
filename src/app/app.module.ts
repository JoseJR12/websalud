import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';



import { CarouselComponent } from './carousel/carousel.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { DocumentosgestionComponent } from './documentosgestion/documentosgestion.component';
import { AseguramientoComponent } from './aseguramiento/aseguramiento.component';
import { SaludComponent } from './salud/salud.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    
   
    CarouselComponent,
    
   
    NoticiasComponent,
    
   
    MisionVisionComponent,
    
   
    DocumentosgestionComponent,
    
   
    AseguramientoComponent,
    
   
    SaludComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
