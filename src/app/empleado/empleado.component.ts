import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { fadeIn } from '../animations-components/animations';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',
    animations: [fadeIn]
})
export class EmpleadoComponent{
    public title = "Componente Empleados";
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('GM',22,'programador',false);
        this.trabajadores = [
            new Empleado('Ana',23,'director',true),
            new Empleado('Juana',30,'administrativo',true),
            new Empleado('Paulina',26,'maestro',false)
        ];
        this.trabajador_externo = true;
        this.color = "red";
        this.color_seleccionado = "#ccc";
    }

    ngOnInit(){
        console.log(this.trabajadores);
        console.log(this.empleado);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    cambiarColor(color){
        this.color_seleccionado = color;
    }
    
    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}