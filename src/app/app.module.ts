//Modules en la parte de imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Rutas
import { routing, appRoutingProviders } from './app.routing';

//Components en la parte de declarations 
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PersonaComponent } from './persona/persona.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { JqueryComponent } from './jquery/jquery.component';
import { AnimationsComponent } from './animations/animations.component';

import { ConversorPipe } from './pipes/conversor.pipe';

//Importar el nuevo modulo
import { ModuloEmailModule } from './modulo-email/moduloemail.module';
import { AdminModule } from './admin/admin-module';

@NgModule({
  //componentes, directivas y pipes
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    PersonaComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    PlantillasComponent,
    HijoComponent,
    PadreComponent,
    JqueryComponent,
    AnimationsComponent,
    ConversorPipe
  ],
  //modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModuloEmailModule,
    BrowserAnimationsModule,
    AdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
