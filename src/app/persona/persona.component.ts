import { Component } from '@angular/core';

@Component({
    selector: 'persona',
    templateUrl: './persona.component.html'
})
export class PersonaComponent{
    public nombre: string = 'GM';
    public edad: number = 22;
    public mayorEdad: boolean = true;
    public trabajo: Array<string> = ['Maestro', 'Programador', 'Secretario'];
    public trabajo2: Array<any> = ['Maestro', 22, 'Secretario'];
    public trabajo3 = ['Maestro', 'Programador', 'Secretario'];
    comodin:any = 'Cualquier cosa';

    //El constructor para darle un valor a las propiedades
    constructor(){
        this.nombre = "GabyGM";
        this.edad = 22;
        this.mayorEdad = true;
        this.comodin = 3443;
    }

    //ngOnInit para llamar métodos
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //Se llama justo después del constructor de forma automática
        //Generalmente se ponen las llamadas a las funciones aquí
        this.holaMundo(this.nombre);

        //Variables y alcance
        //La diferencia entre let y var es el alcance
        var uno = 1;
        var dos = 2;

        if(uno == 1){
            //let actua a nivel de bloque en el que este, no fuera
            //una funcion, un for, un if etc.
            //let uno = 11;
            var uno = 11;
            var dos = 22;
            console.log('dentro del if uno = ' + uno);
        }

        console.log('fuera del if uno = ' + uno); 
    }

    holaMundo(nombre){
        console.log('hola mundo! y Hola ' + nombre);
    }
}
