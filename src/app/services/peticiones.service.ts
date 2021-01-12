import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url: string;

    getPrueba(){
        return "Hola mundo desde el servicioPeticionesService";
    }

    constructor(private _http: Http) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    //este método hará una petición get a esa url 
    //petición ajax por get
    //con el método get del objeto tipo http 
    //le mandamos como parámetro la url
    //se captura la respuesta de la petición y recoge la respuesta con el método 
    //el método .json de res convierte el json a objetos usables para javascript
    //y esto ya devuelve una coleccion de objetos usables dentro del código javascript
    //RESUMEN: llamamos a nuestro servicio (_http), llamamos el método get que se le pasa como parametro al url.
    //capturamos la respuesta en el parámetro de la función de callback (res) y convertimos la respuesta a objeto (res.json())
    getArticulos(){
        return this._http.get(this.url).pipe(map(res => res.json ()));
    }
}