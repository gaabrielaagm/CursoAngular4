import { Component, Input, Output, EventEmitter } from '@angular/core';

//Input -> Entrada de datos - De Padre a Hijo
//Output -> Salida de datos - De Hijo a Padre (son eventos)
//EventEmitter -> Nos permite crear un evento y lanzarlo 
//Las propiedades que tengan el decorador @Output van a tener que ser objetos EventEmitter para poder 
//pasar datos desde afuera y que le lleguen al padre  

@Component({
    selector: 'componente-hijo',
    template: `
        <strong>Este es el {{title}}</strong>
        <p>{{propiedad1}} {{propiedad2}}</p>
        <ul>
            <li>{{propiedad_uno}}</li>
            <ul>
                <li>{{propiedad_dos.id}}</li>
                <li>{{propiedad_dos.web}}</li>
                <li>{{propiedad_dos.tematica}}</li>
            </ul>
        </ul>

        <button (click)="enviar()">Enviar datos al padre</button>
    `
})
export class HijoComponent {
    public title: string;

    @Input() propiedad1: string;
    @Input() propiedad2: string;

    //@Input() propiedad_uno: string;
    @Input('texto1') propiedad_uno: string; //Se le puede cambiar el nombre a la variable
    @Input('texto2') propiedad_dos: string;

    @Output() desde_el_hijo = new EventEmitter();

    constructor(){
        this.title = 'Componente Hijo';
    }

    ngOnInit(){
        console.log(this.propiedad_uno);
        console.log(this.propiedad_dos);

        //Se puede lanzar el vento desde donde se quiera
        //this.enviar();
    }

    enviar(){
       
        //Vamos a emitir fuera de este componente .emit({Object})
        //La variable desde_el_hijo sería como el hilo conductor para emitir 
        //o para enviar fuera una serie de datos definida dentro de un objeto
        // desde_el_hijo tiene la propiedad @Output y es un objeto de EvenEmitter() 
        // por eso podemos usar .emit() y emitir datos en un evento 
        // y nos permite devolver un objeto (datos) en el evento

        this.desde_el_hijo.emit({
                                nombre: 'Gabriela GM', 
                                puesto: 'programador',
                                twitter: 'gaabrielaagm'
                            });
    }
}