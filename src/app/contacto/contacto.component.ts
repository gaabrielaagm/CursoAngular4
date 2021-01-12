import { Component } from '@angular/core';
//Componentes necesarios para recoger parámetros, redirecciones etc.
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: 'contacto.component.html'
})
export class ContactoComponent{
    public titulo = "Página de contacto";
    public parametro: string;
    public emailContacto: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        //Para recoger los parametros de la url
        //Con el método forEach que tiene le router
        this._route.params.forEach((params: Params) => { // es una función de flecha (ver nota de abajo)
            //params es un array con todos los parámetros dentro de la url
            this.parametro = params['page'];
            console.log("params: ");
            console.log(params);
            console.log("parametro: " + this.parametro);
        });
    }

    redirigir(){
        //navigate es un método que nos permite redirigir 
        //se le envía la ruta y el parámetro
        this._router.navigate(['/contacto/','defaultParameter']);
    }

    redirigirHome(){
        //navigate es un método que nos permite redirigir 
        //se le envía la ruta y el parámetro
        this._router.navigate(['/home']);
    }

    //Guardar en LocalStorage
    guardarEmail(){
        //console.log(this.emailContacto);
        localStorage.setItem('emailContacto',this.emailContacto);
        //console.log(localStorage.getItem('emailContacto'));
    }
}

/*
//funcion callback (con la función y sin flecha)
function(parametros){...}

//funcion flecha (sin funcion y con flecha)
(parametros) => {...}

Es importante utilizar las funciones de flecha en las funciones de callback por que
Las funciones flecha nos permiten acceder a parámetros y a las propiedades de la clase 
dentro de una función de callback
*/