import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent } from './coche/coche.component';

import { ConvesorPipe } from './pipes/conversor.pipe';
import { UsuarioComponent } from './usuario/usuario.component'
import { HttpModule } from '@angular/http';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  // El arreglo declarations contiene: pipes, directivas y componentes
  declarations: [
    AppComponent,
    HomeComponent,
    EmpleadoComponent,
    FrutaComponent,
    ContactoComponent,
    ConvesorPipe,
    CocheComponent,
    UsuarioComponent,
    PlantillasComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
