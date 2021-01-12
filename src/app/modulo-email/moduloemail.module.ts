//Configuracion del NgModule o del modulo

//Importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Importamos componentes 
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

//Decorador NgModule para cargar los componentes y la configuracion del modulo
@NgModule({
    //cargar los modulos de los cuales va a depender este modulo
    //(dentro de un modulo se pueden cargar todos los modulos que queramos, de Angular o propios)
    imports: [CommonModule, FormsModule],
    //cargar todos los componentes de este modulo
    declarations: [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    //cual va a ser el componente principal o el que se usará fuera de este componente
    exports: [MainEmailComponent]
})
export class ModuloEmailModule{ }
