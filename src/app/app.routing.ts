import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { PersonaComponent } from './persona/persona.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { PadreComponent } from './padre/padre.component';
import { JqueryComponent } from './jquery/jquery.component';
import { AnimationsComponent } from './animations/animations.component';

//objetos json con la configuración de la ruta
//configuración de rutas
const appRouters: Routes = [
    {path: '', component: HomeComponent}, //ruta inicial, como la página home
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'persona', component: PersonaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: 'coches', component: CochesComponent},
    {path: 'plantillas', component: PlantillasComponent},
    {path: 'padre-component', component: PadreComponent},
    {path: 'jquery-component', component: JqueryComponent},
    {path: 'animations-component', component: AnimationsComponent},
    {path: '**',  component: HomeComponent} //ruta cuando no exista una ruta que quiera cargar (siempre va al final)
];

//Es solo un procedimiento que necesita angular para poder cargar el provider de la ruta y que todo funcione
export const appRoutingProviders: any[] = [];

//con forRoot le dices que array de rutas tiene que cargar para que tome esas rutas y las introduzca en la configuracion del framework y funcione todo.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);